import { Logout } from '@mui/icons-material';
import { Fab, IconButton, IconButtonProps, styled } from '@mui/material';

export default function LogoutButton({ onClick }: IconButtonProps) {
   return (
      <FabStyle>
         <IconButton onClick={onClick} color='inherit'>
            <Logout />
         </IconButton>
      </FabStyle>
   );
}

const FabStyle = styled(Fab)(({ theme }) => ({
   position: 'absolute',
   bottom: theme.spacing(9),
   right: theme.spacing(3),
}));
