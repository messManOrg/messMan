import { Grid, List, ListItem } from '@mui/material';
import UserButton from 'components/UserButton';

function UserList({ user }: { user: string[] }) {
   return (
      <List>
         <ListItem disablePadding>
            <Grid gap={1.5} container>
               {user.map(data => (
                  <UserButton
                     avatar='/static/images/avatar.jpg'
                     id={data}
                     name={data}
                     key={data}
                  />
               ))}
            </Grid>
         </ListItem>
      </List>
   );
}

export default UserList;
