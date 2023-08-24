import { useLocation, useNavigate } from 'react-router-dom';
import Head from 'next/head';
import {
   Button,
   Typography,
   Box,
   TextField,
   CircularProgress,
   Stack,
} from '@mui/material';
import Error from 'components/Error';
import Link from 'components/Link';
import { FBLoginButton, GoogleLoginButton } from 'components/LoginButtons';
import { RoutePaths } from 'enums/routes';
import { useAuthActions } from 'store/auth/Provider';
import { useLogin } from './api';

const Login: React.FC = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const auth = useAuthActions();
   const { trigger, error, isMutating } = useLogin();

   const from = location.state?.from?.pathname || '/onboard';

   async function handleLogin(e: React.ChangeEvent<HTMLFormElement>) {
      e.preventDefault();

      const formData = new FormData(e.target).entries();
      const args = Object.fromEntries(formData);
      const user = await trigger(args);

      if (!user) return;

      auth.signIn(user, () => {
         navigate(from, {
            replace: true,
         });
      });
   }

   return (
      <form onSubmit={handleLogin}>
         <Head>
            <title>Login</title>
         </Head>

         <Typography variant='h4' gutterBottom align='center'>
            Login
         </Typography>

         <Stack gap={1.5}>
            <TextField
               fullWidth
               label='Phone/Email'
               name='username'
               variant='outlined'
               type='text'
               required
            />

            <TextField
               fullWidth
               label='Password'
               name='password'
               variant='outlined'
               type='password'
               required
            />

            <Button
               fullWidth
               size='large'
               type='submit'
               variant='contained'
               color='info'
               disabled={isMutating}
               endIcon={
                  isMutating ? <CircularProgress size='1rem' /> : undefined
               }
            >
               Login
            </Button>
         </Stack>

         <Typography align='center' marginY={1}>
            or
         </Typography>

         <Stack gap={1.5}>
            <GoogleLoginButton />
            <FBLoginButton />
         </Stack>

         {error && (
            <Box marginY={2}>
               <Error error={error} />
            </Box>
         )}

         <Box marginY={1.5}>
            <Typography gutterBottom>
               {`Don't have an Account? `}

               <Link to={RoutePaths.Register}>Register here</Link>
            </Typography>

            <Link to={RoutePaths.ForgetPassword}>Forget Password?</Link>
         </Box>
      </form>
   );
};

export default Login;
