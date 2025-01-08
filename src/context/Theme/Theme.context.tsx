// Context for the theme of the application, setting it globally

// External libraries
import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// hooks
import { useTheme } from '../../hooks/useTheme';
import { getTheme } from '../../hooks/getTheme';

// interfaces
import { ThemeContext_I } from './Theme.interfaces';

const ThemeContext = createContext<ThemeContext_I | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  const currentTheme = getTheme(theme.theme);

  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
