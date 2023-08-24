import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { RoutePaths } from 'enums/routes';
import { useAuth, useAuthActions } from 'store/auth/Provider';
import Error from './Error';

interface Props {
   children: React.ReactNode;
}

const RequireAuth: React.FC<Props> = props => {
   const location = useLocation();
   const navigate = useNavigate();
   const { currentUser } = useAuth();
   const { signOut } = useAuthActions();

   if (!currentUser) {
      return <Navigate to={RoutePaths.Login} state={{ from: location }} />;
   }

   return (
      <ErrorBoundary
         fallbackRender={({ error }) => {
            if (error.statusCode === 401) {
               signOut(() => {
                  navigate(RoutePaths.Login, {
                     state: { from: location },
                  });
               });

               return null;
            }

            return <Error error={error} />;
         }}
      >
         {props.children}
      </ErrorBoundary>
   );
};

export default RequireAuth;
