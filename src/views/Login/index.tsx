import { Button, Typography, Box, TextField } from '@mui/material';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuthActions } from 'store/auth/Provider';
import { RoutePaths } from 'enums/routes';
import { FBLoginButton, GoogleLoginButton } from 'components/LoginButtons';
import Head from 'next/head';

const Login: React.FC = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const auth = useAuthActions();

   const from = location.state?.from?.pathname || '/onboard';

   function handleLogin() {
      auth.signInWithEmail(() => {
         navigate(from, { replace: true });
      });
   }

   function handleGoogleLogin() {
      auth.signInWithGoogle(() => navigate(from, { replace: true }));
   }

   return (
      <>
         <Head>
            <title>Login</title>
         </Head>

         <Typography variant='h4' gutterBottom align='center'>
            Login
         </Typography>

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

         <Box display='flex' justifyContent='space-between' marginY={1}>
            <Typography marginY={1}>
               {`Don't have an Account? `}
               <Link
                  style={{ textDecoration: 'none' }}
                  to={RoutePaths.Register}
               >
                  Register here
               </Link>
            </Typography>

            <Typography marginY={1}>
               {' '}
               <Link
                  style={{ textDecoration: 'none' }}
                  to={RoutePaths.ForgetPassword}
               >
                  Forget Password?
               </Link>
            </Typography>
         </Box>

         <Button
            onClick={handleLogin}
            variant='contained'
            fullWidth
            color='info'
         >
            Login
         </Button>

         <Typography align='center' marginY={1}>
            or
         </Typography>

         <GoogleLoginButton handleLogin={handleGoogleLogin} />
         <FBLoginButton handleLogin={handleLogin} />
      </>
   );
};

export default Login;
