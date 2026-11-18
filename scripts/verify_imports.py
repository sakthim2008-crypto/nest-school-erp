import os
import re

src_dir = os.path.abspath('src')
errors = []
import_pattern = re.compile(r'(?:import|from)\s+[\'"](\.[^\'"]+)[\'"]')

def check_path_casing(path):
    parts = []
    curr = os.path.normpath(path)
    while curr and curr != os.path.dirname(curr):
        parts.append(os.path.basename(curr))
        curr = os.path.dirname(curr)
    parts.reverse()
    
    check_dir = curr
    for part in parts:
        entries = os.listdir(check_dir)
        if part not in entries:
            matches = [e for e in entries if e.lower() == part.lower()]
            return False, f"Segment '{part}' does not match exact disk case (disk has: {matches})"
        check_dir = os.path.join(check_dir, part)
    return True, ""

count = 0
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if not f.endswith(('.ts', '.tsx', '.css')):
            continue
        count += 1
        filepath = os.path.join(root, f)
        rel_from_src = os.path.relpath(filepath, src_dir).replace('\\', '/')
        dir_of_file = os.path.dirname(filepath)
        
        with open(filepath, 'r', encoding='utf-8') as handle:
            content = handle.read()
            
        for match in import_pattern.finditer(content):
            imported_rel = match.group(1)
            resolved = os.path.normpath(os.path.join(dir_of_file, imported_rel))
            
            candidates = [
                resolved,
                resolved + '.ts',
                resolved + '.tsx',
                resolved + '.js',
                resolved + '.jsx',
                resolved + '.css',
                os.path.join(resolved, 'index.ts'),
                os.path.join(resolved, 'index.tsx'),
            ]
            
            cand_found = None
            for cand in candidates:
                if os.path.exists(cand):
                    cand_found = cand
                    break
                    
            if not cand_found:
                errors.append(f"Missing import in {rel_from_src}: '{imported_rel}'")
            else:
                ok, msg = check_path_casing(cand_found)
                if not ok:
                    errors.append(f"Case mismatch in {rel_from_src} importing '{imported_rel}': {msg}")

print(f"Checked {count} source files.")
if not errors:
    print("SUCCESS: 100% of relative imports match exact case on disk.")
else:
    print(f"FOUND {len(errors)} ERRORS:")
    for err in errors:
        print("  -", err)
