import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import RootProvider from 'RootProvider';

// lazy loading is used to avoid the hidration mismatch between client & server
const AppRoutes = dynamic(() => import('./AppRoutes'), { ssr: false });

function App() {
   const { asPath } = useRouter();

   // static router runs on the server/nodejs
   if (typeof window === 'undefined')
      return (
         <StaticRouter location={asPath}>
            <RootProvider>
               <AppRoutes />
            </RootProvider>
         </StaticRouter>
      );

   return (
      <BrowserRouter>
         <RootProvider>
            <AppRoutes />
         </RootProvider>
      </BrowserRouter>
   );
}

export default App;
