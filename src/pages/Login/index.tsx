import { Button, Typography, Card, Box, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/context/auth/AuthProvider';
import { CardContainer, SocialContainer } from './styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

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
         <CardContainer>
            <Card sx={{ minWidth: 475 , p: '2rem' }}>
               <Typography
                  variant='h4'
                  gutterBottom
                  sx={{ textAlign: 'center' }}
               >
                  Login
               </Typography>
               <Box sx={{ my: '1.5rem' }}>
                  <TextField
                     sx={{ width: '100%' }}
                     id='standard-basic'
                     label='Your Email'
                     variant='standard'
                  />
               </Box>
               <Box sx={{ mb: '2rem' }}>
                  <TextField
                     sx={{ width: '100%' }}
                     id='standard-basic'
                     label='Your Password'
                     variant='standard'
                  />
               </Box>

               <Button
                  onClick={handleLogin}
                  variant='contained'
                  sx={{ width: '100%' }}
               >
                  Login
               </Button>
               <Typography sx={{my:'10px'}}>
                  or login with 
               </Typography>
               <SocialContainer>
                  <GoogleIcon sx={{fontSize:'3em',mx:'1rem'}}/>
                  <FacebookIcon sx={{fontSize:'3em',mx:'1rem'}}/>
               </SocialContainer>
            </Card>
         </CardContainer>
      </>
   );
};

export default Login;
