import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
   createTheme,
   CssBaseline,
   ThemeProvider,
   useMediaQuery,
} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './store/context/auth/AuthProvider';
import StoreProvider from './store/context/root/StoreProvider';

const Root = () => {
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
      <ThemeProvider theme={theme}>
         <AuthProvider>
            <BrowserRouter>
               <StoreProvider>
                  <CssBaseline />
                  <App />
               </StoreProvider>
            </BrowserRouter>
         </AuthProvider>
      </ThemeProvider>
   );
};

ReactDOM.render(
   <React.StrictMode>
      <Root />
   </React.StrictMode>,
   document.getElementById('root')
);

if (process.env.NODE_ENV === 'production') {
   serviceWorkerRegistration.register();
} else {
   serviceWorkerRegistration.unregister();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
