import type { AppProps } from 'next/app';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
   createTheme,
   CssBaseline,
   ThemeProvider,
   useMediaQuery,
} from '@mui/material';
import { useMemo } from 'react';
import { Roboto } from '@next/font/google';
import AuthProvider from 'store/auth/Provider';

const serviceWorkerRegistration = () => import('serviceWorkerRegistration');

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['100', '300', '400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
   const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

   const theme = useMemo(
      () =>
         createTheme({
            palette: {
               mode: isDarkMode ? 'dark' : 'light',
            },
         }),
      [isDarkMode]
   );

   return (
      <div className={roboto.className}>
         <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
               <CssBaseline />

               <AuthProvider>
                  <Component {...pageProps} />
               </AuthProvider>
            </ThemeProvider>
         </CacheProvider>
      </div>
   );
}

const cache = createCache({ key: 'messman', prepend: true });

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
   serviceWorkerRegistration();
}
