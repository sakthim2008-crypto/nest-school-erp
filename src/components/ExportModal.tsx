import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  FileSpreadsheet, 
  Code2, 
  CheckCircle2, 
  Printer, 
  GraduationCap, 
  Sparkles, 
  School 
} from 'lucide-react';
import { WeekMIS, WEEKS_DATA } from '../data/schoolData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentWeek: WeekMIS;
  academicYear: string;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  currentWeek,
  academicYear
}) => {
  const [exportFormat, setExportFormat] = useState<'pdf' | 'csv' | 'json'>('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadCsv = () => {
    setIsExporting(true);
    setTimeout(() => {
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += "Week,Section_Code,Section_Name,Metric_SNo,Metric_Description,EYP,PYP,CIE_LS,CIE_IGCSE_AS,Comments_PYP,Comments_IGCSE\n";

      WEEKS_DATA.forEach(week => {
        week.sections.forEach(sec => {
          sec.metrics.forEach(m => {
            const desc = `"${m.description.replace(/"/g, '""')}"`;
            const eyp = m.eyp ?? '';
            const pyp = m.pyp ?? '';
            const ciels = m.cie_ls ?? '';
            const igcse = m.cie_igcse_as ?? '';
            const cmtPyp = `"${(m.comments.pyp || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`;
            const cmtIgcse = `"${(m.comments.cie_igcse_as || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`;
            csvContent += `"${week.week_label}","${sec.code}","${sec.name}","${m.s_no}",${desc},${eyp},${pyp},${ciels},${igcse},${cmtPyp},${cmtIgcse}\n`;
          });
        });
      });

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `The_NEST_School_MIS_Report_AY_${academicYear}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsExporting(false);
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    }, 500);
  };

  const handleDownloadJson = () => {
    setIsExporting(true);
    setTimeout(() => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(WEEKS_DATA, null, 2));
      const link = document.createElement("a");
      link.setAttribute("href", dataStr);
      link.setAttribute("download", `The_NEST_School_MIS_Dataset_AY_${academicYear}.json`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsExporting(false);
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    }, 500);
  };

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#0F172A] rounded-4xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#C4B5FD]/50 dark:border-slate-800 relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Pastel Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C4B5FD] via-[#7DD3FC] via-[#A7F3D0] to-[#FDBAAB]" />

        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2.5xl bg-gradient-to-tr from-[#C4B5FD] to-[#7DD3FC] text-navy dark:text-purple-300 flex items-center justify-center shadow-xs">
              <Download className="w-5 h-5 text-purple-700 dark:text-purple-300" />
            </div>
            <div>
              <h3 className="text-lg font-black text-navy dark:text-white tracking-tight font-display">
                Export Executive MIS Pack
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                The NEST School • Academic Year {academicYear}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close export dialog"
            className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-navy dark:hover:text-white transition-colors pop-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Options */}
        <div className="space-y-3 mb-6">
          <div
            onClick={() => setExportFormat('pdf')}
            className={`p-4 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between pop-btn ${
              exportFormat === 'pdf'
                ? 'border-purple-600 bg-[#FAF8FF] dark:bg-purple-950/30 shadow-xs'
                : 'border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#C4B5FD]/40 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-navy dark:text-white">Executive PDF Report</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Print-ready executive summary for HoS & HoA review meeting
                </p>
              </div>
            </div>
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              exportFormat === 'pdf' ? 'border-purple-600' : 'border-slate-300 dark:border-slate-600'
            }`}>
              {exportFormat === 'pdf' && <div className="w-2 h-2 rounded-full bg-purple-600" />}
            </div>
          </div>

          <div
            onClick={() => setExportFormat('csv')}
            className={`p-4 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between pop-btn ${
              exportFormat === 'csv'
                ? 'border-emerald-600 bg-[#F0FDF4] dark:bg-emerald-950/30 shadow-xs'
                : 'border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#A7F3D0]/50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-navy dark:text-white">Spreadsheet CSV / Excel</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Full multi-week dataset with all rows, comments & faculty timestamps
                </p>
              </div>
            </div>
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              exportFormat === 'csv' ? 'border-emerald-600' : 'border-slate-300 dark:border-slate-600'
            }`}>
              {exportFormat === 'csv' && <div className="w-2 h-2 rounded-full bg-emerald-600" />}
            </div>
          </div>

          <div
            onClick={() => setExportFormat('json')}
            className={`p-4 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between pop-btn ${
              exportFormat === 'json'
                ? 'border-sky-600 bg-[#F0F9FF] dark:bg-sky-950/30 shadow-xs'
                : 'border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#7DD3FC]/50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-navy dark:text-white">Raw MIS JSON Object</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Full structured schema for database ingestion & API backup
                </p>
              </div>
            </div>
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              exportFormat === 'json' ? 'border-sky-600' : 'border-slate-300 dark:border-slate-600'
            }`}>
              {exportFormat === 'json' && <div className="w-2 h-2 rounded-full bg-sky-600" />}
            </div>
          </div>
        </div>

        {/* Dataset Summary Pill */}
        <div className="bg-[#FAF8FF] dark:bg-slate-900 border border-[#C4B5FD]/50 dark:border-slate-800 rounded-2.5xl p-3 mb-6 text-xs text-slate-600 dark:text-slate-400 space-y-1">
          <div className="flex justify-between">
            <span className="text-slate-400 dark:text-slate-500 font-bold">Total Recorded Weeks:</span>
            <span className="font-black text-navy dark:text-white">{WEEKS_DATA.length} Weeks (Wk 1 to Wk 7)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400 dark:text-slate-500 font-bold">Scope:</span>
            <span className="font-black text-navy dark:text-white">4 Programmes (EYP, PYP, CIE LS, IGCSE/AS)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400 dark:text-slate-500 font-bold">Sections Included:</span>
            <span className="font-black text-navy dark:text-white">Sections I through VIII Complete</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-2xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors pop-btn"
          >
            Cancel
          </button>

          {exportFormat === 'pdf' ? (
            <button
              onClick={() => {
                handlePrintPdf();
                onClose();
              }}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-white font-black text-xs flex items-center gap-2 shadow-pastel-sm pop-btn"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          ) : exportFormat === 'csv' ? (
            <button
              onClick={handleDownloadCsv}
              disabled={isExporting}
              className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-2 shadow-pastel-sm pop-btn disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Generating...' : 'Download CSV'}</span>
            </button>
          ) : (
            <button
              onClick={handleDownloadJson}
              disabled={isExporting}
              className="px-5 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs flex items-center gap-2 shadow-pastel-sm pop-btn disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Packaging...' : 'Download JSON'}</span>
            </button>
          )}
        </div>

        {exportSuccess && (
          <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            File downloaded successfully!
          </div>
        )}
      </div>
    </div>
  );
};
