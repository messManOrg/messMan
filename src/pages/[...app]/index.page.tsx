import { BrowserRouter } from 'react-router-dom';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import fetcher from 'api/fetcher';
import Error from 'components/Error';
import RootProvider from 'store/RootProvider';

const ErrorBoundary = dynamic(
   () => import('react-error-boundary').then(mod => mod.ErrorBoundary),
   { ssr: false }
);

const SWRConfig = dynamic(() => import('swr').then(mod => mod.SWRConfig), {
   ssr: false,
});

const StaticRouter = dynamic(
   () => import('react-router-dom/server').then(mod => mod.StaticRouter),
   {
      ssr: false,
   }
);

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
            <ErrorBoundary
               fallbackRender={({ error }) => <Error error={error} />}
            >
               <SWRConfig value={{ fetcher, suspense: true }}>
                  <AppRoutes />
               </SWRConfig>
            </ErrorBoundary>
         </RootProvider>
      </BrowserRouter>
   );
}

export default App;
