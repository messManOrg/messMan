import {
   Avatar,
   Grid,
   List,
   ListItem,
   ListItemAvatar,
   ListItemButton,
   ListItemText,
} from '@mui/material';

function UserList({ user }: { user: string[] }) {
   return (
      <List>
         <ListItem disablePadding>
            <Grid container>
               {user.map(data => (
                  <User key={data} name={data} />
               ))}
            </Grid>
         </ListItem>
      </List>
   );
}

function User({ name }: { name: string }) {
   return (
      <Grid item>
         <ListItemButton>
            <ListItemAvatar>
               <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt={name}
                  src={`/static/images/avatar.jpg`}
               />
            </ListItemAvatar>
            <ListItemText primary={name} />
         </ListItemButton>
      </Grid>
   );
}
export default UserList;
