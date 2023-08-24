import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';

interface LoginButton {
   handleLogin?: () => void;
}

export function FBLoginButton(props: LoginButton) {
   return (
      <Button
         onClick={props.handleLogin}
         variant='contained'
         fullWidth
         sx={{ backgroundColor: '#0571E6' }}
      >
         <FacebookIcon sx={{ mx: 2 }} />
         Continue With Facebook
      </Button>
   );
}

export function GoogleLoginButton(props: LoginButton) {
   return (
      <Button
         onClick={props.handleLogin}
         variant='contained'
         fullWidth
         sx={{ backgroundColor: '#E34133' }}
      >
         <GoogleIcon sx={{ mx: 2 }} />
         Continue With Google
      </Button>
   );
}
