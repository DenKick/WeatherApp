import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: '#000',
    secondary: '#fff',
  },
};

const lightTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: '#fff',
    secondary: '#000',
  },
};

export const ThemeContext = createContext(lightTheme);
export const ThemeProvider = ThemeContext.Provider;
export { darkTheme, lightTheme };
