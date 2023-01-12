import * as React from 'react';
import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
const Members: React.FC = () => {
   return (
      <Box>
         <Typography variant='h6' marginY={2}>
            All Members
         </Typography>
         <List>
            {[0, 1, 2, 3, 4, 5, 6].map(value => {
               return (
                  <ListItem
                     key={value}
                     secondaryAction={<CloseIcon />}
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
                        <ListItemText primary={`Line item ${value + 1}`} />
                     </ListItemButton>
                  </ListItem>
               );
            })}
         </List>
      </Box>
   );
};

export default Members;
