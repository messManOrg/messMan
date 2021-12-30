import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from '../enums/routes';
import { useAuth } from '../store/auth/Provider';

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
   let auth = useAuth();
   let location = useLocation();

   if (!auth.user) {
      return <Navigate to={RoutePaths.Login} state={{ from: location }} />;
   }

   return children;
};

export default RequireAuth;
