import { Button, Typography, Card, Box, TextField } from '@mui/material';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../store/context/auth/AuthProvider';
import { CardContainer } from './styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';


const Register: React.FC = () => {
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
      <CardContainer>
            <Card sx={{ maxWidth: 700, py: '3rem', px: '1.5rem', m: '1rem' }}>
               <Typography
                  variant='h4'
                  gutterBottom
                  sx={{ textAlign: 'center' }}
               >
                  Register
               </Typography>
               <Box sx={{ my: '1.5rem' }}>
                  <TextField
                     sx={{ width: '100%' }}
                     label='Name'
                     variant='outlined'
                     type='text'
                  />
               </Box>
               <Box sx={{ my: '1.5rem' }}>
                  <TextField
                     sx={{ width: '100%' }}
                     label='Email'
                     variant='outlined'
                     type='email'
                  />
               </Box>
               <Box sx={{ my: '1.5rem' }}>
                  <TextField
                     sx={{ width: '100%' }}
                     label='Password'
                     variant='outlined'
                     type='password'
                  />
               </Box>
               <Box sx={{ mb: '2rem' }}>
                  <TextField
                     sx={{ width: '100%' }}
                     label='Retype Password'
                     variant='outlined'
                     type='password'
                  />
               </Box>
               <Typography sx={{ my: '10px' }}>
                  Already have a Account?{' '}
                  <Link style={{ textDecoration: 'none' }} to='/login'>
                     Login here
                  </Link>
               </Typography>
               <Button
                  onClick={handleLogin}
                  variant='contained'
                  sx={{ width: '100%' }}
                  color='info'
               >
                  Register
               </Button>
               <Typography sx={{ my: '10px' }}>or login with</Typography>
               <Button
                  onClick={handleLogin}
                  variant='contained'
                  sx={{ width: '100%' }}
                  color='warning'
               >
                  <GoogleIcon sx={{ mx: '1rem' }} />
                  Login With Google
               </Button>
               <Button
                  onClick={handleLogin}
                  variant='contained'
                  sx={{ width: '100%', mt: '0.5rem' }}
                  
               >
                  <FacebookIcon sx={{ mx: '1rem' }} />
                  Login With Facebook
               </Button>
            </Card>
         </CardContainer>
   );
};

export default Register;
