import { createTheme, ThemeOptions } from '@mui/material';
import { Roboto } from '@next/font/google';

const font = Roboto({
   subsets: ['latin'],
   weight: ['100', '300', '400', '500', '700'],
   display: 'swap',
});

const baseTheme: ThemeOptions = {
   typography: {
      fontFamily: font.style.fontFamily,
   },
};

const lightTheme = createTheme({
   palette: {
      mode: 'light',
   },
   ...baseTheme,
});

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
   },
   ...baseTheme,
});

export function getTheme(isDarkMode: boolean) {
   return isDarkMode ? darkTheme : lightTheme;
}
