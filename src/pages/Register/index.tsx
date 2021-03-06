import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button, Typography, Box, TextField } from '@mui/material';
import { useAuth } from '../../store/auth/Provider';
import AuthLayout from '../../components/AuthLayout';
import { RoutePaths } from '../../enums/routes';
import {
   FBLoginButton,
   GoogleLoginButton,
} from '../../components/LoginButtons';

const Register: React.FC = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const auth = useAuth();

   const from = location.state?.from?.pathname || '/';

   const handleLogin = () => {
      auth.signInWithEmail(() => {
         navigate(from, { replace: true });
      });
   };

   return (
      <AuthLayout>
         <Typography variant='h4' gutterBottom align='center'>
            Register
         </Typography>
         <Box marginY={1.5}>
            <TextField fullWidth label='Name' variant='outlined' type='text' />
         </Box>
         <Box marginY={1.5}>
            <TextField
               fullWidth
               label='Email'
               variant='outlined'
               type='email'
            />
         </Box>
         <Box marginY={1.5}>
            <TextField
               fullWidth
               label='Password'
               variant='outlined'
               type='password'
            />
         </Box>
         <Box marginY={1.5}>
            <TextField
               fullWidth
               label='Retype Password'
               variant='outlined'
               type='password'
            />
         </Box>

         <Typography marginY={1}>
            Already have an Account?{' '}
            <Link style={{ textDecoration: 'none' }} to={RoutePaths.Login}>
               Login here
            </Link>
         </Typography>
         <Button
            onClick={handleLogin}
            variant='contained'
            fullWidth
            color='info'
         >
            Register
         </Button>

         <Typography align='center' marginX={1}>
            or
         </Typography>

         <GoogleLoginButton handleLogin={handleLogin} />
         <FBLoginButton handleLogin={handleLogin} />
      </AuthLayout>
   );
};

export default Register;
