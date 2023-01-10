import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'enums/routes';
import { useAuth } from 'store/auth/Provider';

interface Props {
   children: React.ReactNode;
}

const RequireAuth: React.FC<Props> = props => {
   const auth = useAuth();
   const location = useLocation();

   if (!auth.currentUser) {
      return <Navigate to={RoutePaths.Login} state={{ from: location }} />;
   }

   return <>{props.children}</>;
};

export default RequireAuth;
