// External libraries
import React, { createContext, useState, useContext, ReactNode } from 'react';

type ThemeContextType = {
  theme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const temaSalvo = localStorage.getItem('theme');
    return temaSalvo === 'true';
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const setaTema = !prev;
      localStorage.setItem('theme', String(setaTema));
      return setaTema;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
