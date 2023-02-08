import { Box, Button, Chip } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ActionButton from './components/ActionButton';
import SearchUser from './components/SearchUser';
import { useAuth } from 'store/auth/Provider';
import { Link } from 'react-router-dom';

function Members() {
   const auth = useAuth();
   const manger = auth.role === 'manger';
   return (
      <Box>
         <SearchUser />
         {manger && (
            <Link to='/app/adduser' style={{ textDecoration: 'none' }}>
               <Button variant='contained' fullWidth sx={{ marginY: 2 }}>
                  Add User
               </Button>
            </Link>
         )}

         <List>
            {[0, 1, 2, 3, 4, 5, 6].map(value => {
               return (
                  <ListItem
                     key={value}
                     secondaryAction={manger && <ActionButton />}
                     disablePadding
                  >
                     <ListItemButton>
                        <ListItemAvatar>
                           <Avatar
                              alt={`Avatar n°${value + 1}`}
                              src={`/static/images/avatar/${value + 1}.jpg`}
                              sx={{ width: 30, height: 30 }}
                           />
                        </ListItemAvatar>
                        <ListItemText
                           primary={`User No ${value + 1}`}
                           secondary={
                              value === 2 && (
                                 <Chip
                                    color='primary'
                                    label='Manager'
                                    variant='outlined'
                                    size='small'
                                 />
                              )
                           }
                        />
                     </ListItemButton>
                  </ListItem>
               );
            })}
         </List>
      </Box>
   );
}

export default Members;
