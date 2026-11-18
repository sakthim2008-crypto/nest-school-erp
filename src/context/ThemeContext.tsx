import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';
export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  isAnimating: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('nest_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {
      // fallback
    }
    return 'light';
  });

  const [userRole, setUserRole] = useState<UserRole>('admin');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('nest_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    // Add smooth transition class to document root
    const root = document.documentElement;
    root.classList.add('theme-transitioning');
    setIsAnimating(true);

    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));

    setTimeout(() => {
      root.classList.remove('theme-transitioning');
      setIsAnimating(false);
    }, 500);
  };

  const setTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    root.classList.add('theme-transitioning');
    setIsAnimating(true);
    setThemeState(mode);
    setTimeout(() => {
      root.classList.remove('theme-transitioning');
      setIsAnimating(false);
    }, 500);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, userRole, setUserRole, isAnimating }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
