import { useLocation, useNavigate } from 'react-router-dom';
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
import { useRegister } from './api';

const Register: React.FC = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const auth = useAuthActions();
   const { trigger, error, isMutating } = useRegister();

   const from = location.state?.from?.pathname || '/onboard';

   async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
      e.preventDefault();

      const formData = new FormData(e.target).entries();
      const args = Object.fromEntries(formData) as unknown;
      const user = await trigger(args);

      if (!user) return;

      auth.signIn(user, () => {
         navigate(from, {
            replace: true,
         });
      });
   }

   return (
      <form onSubmit={handleSubmit}>
         <Typography variant='h4' gutterBottom align='center'>
            Register
         </Typography>

         <Stack gap={1.5}>
            <TextField
               fullWidth
               label='Name'
               name='name'
               variant='outlined'
               type='text'
               required
            />

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

            <TextField
               fullWidth
               label='Retype Password'
               name='re_password'
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
               Register
            </Button>
         </Stack>

         <Typography align='center' marginX={1}>
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

         <Typography marginY={1.5}>
            Already have an Account?{' '}
            <Link to={RoutePaths.Login}>Login here</Link>
         </Typography>
      </form>
   );
};

export default Register;
