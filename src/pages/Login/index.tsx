import { Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/context/auth/AuthProvider';

const Login: React.FC = () => {
   let navigate = useNavigate();
   let location = useLocation();
   let auth = useAuth();

   let from = location.state?.from?.pathname || '/';

   const handleLogin = () => {
      auth.signin('demo', () => {
         navigate(from, { replace: true });
      });
   };

   return (
      <>
         <Typography variant='h2'>Login page</Typography>
         <Button onClick={handleLogin}>Login</Button>
      </>
   );
};

export default Login;
