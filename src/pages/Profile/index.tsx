import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { RoutePaths } from '../../enums/routes';
import { useAuth } from '../../store/context/auth/AuthProvider';

const Profile: React.FC = () => {
   const { signout } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   const handleLogout = () => {
      signout(() => {
         navigate(RoutePaths.Login, { state: location });
      });
   };

   return (
      <Layout>
         <h1>Profile</h1>

         <Button onClick={handleLogout}>Log Out</Button>
      </Layout>
   );
};

export default Profile;
