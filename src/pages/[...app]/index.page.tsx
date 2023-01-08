import dynamic from 'next/dynamic';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import RootProvider from 'RootProvider';
import { useAuth } from 'store/auth/Provider';

const Auth = dynamic(() => import('./Auth'), { ssr: false });
const MainApp = dynamic(() => import('./MainApp'), { ssr: false });

function App() {
   const { currentUser } = useAuth();

   // static router runs on the server/nodejs
   if (typeof window === 'undefined')
      return (
         <StaticRouter location='/app'>
            <RootProvider>{currentUser ? <MainApp /> : <Auth />}</RootProvider>
         </StaticRouter>
      );

   return (
      <BrowserRouter>
         <RootProvider>
            {/*  */}
            {currentUser ? <MainApp /> : <Auth />}
         </RootProvider>
      </BrowserRouter>
   );
}

export default App;
