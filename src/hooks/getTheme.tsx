// Hook for managing the theme of the application

// External libraries
import { dark, light } from '../styles/Themes.style';

export const getTheme = (themeKey: string) => {
  switch (themeKey) {
    case 'dark':
      return dark;
    default:
      return light; // Default to light theme if no match
  }
};
