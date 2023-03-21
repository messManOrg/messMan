import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';

interface LoginButton {
   handleLogin: () => void;
}

export const FBLoginButton: React.FC<LoginButton> = ({ handleLogin }) => {
   return (
      <Button
         onClick={handleLogin}
         variant='contained'
         fullWidth
         sx={{ backgroundColor: '#0571E6' }}
      >
         <FacebookIcon sx={{ mx: 2 }} />
         Login With Facebook
      </Button>
   );
};

export const GoogleLoginButton: React.FC<LoginButton> = ({ handleLogin }) => {
   return (
      <Button
         onClick={handleLogin}
         variant='contained'
         fullWidth
         sx={{ mb: 1, backgroundColor: '#E34133' }}
      >
         <GoogleIcon sx={{ mx: 2 }} />
         Login With Google
      </Button>
   );
};
