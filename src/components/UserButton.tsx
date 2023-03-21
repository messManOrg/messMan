import { Link } from 'react-router-dom';
import { Avatar, Stack, Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';

export interface User {
   id: string;
   avatar: string;
   name: string;
}

// an inline button as opposed to full width like ListItemButton
function UserButton({ id, avatar, name }: User) {
   return (
      <MuiLink component={Link} to={id} sx={{ textDecoration: 'none' }}>
         <Stack direction='row' spacing={1.5} alignItems='center'>
            <Avatar alt={name} src={avatar} sx={{ width: 36, height: 36 }} />
            <Typography fontWeight='bold'>{name}</Typography>
         </Stack>
      </MuiLink>
   );
}

export default UserButton;
