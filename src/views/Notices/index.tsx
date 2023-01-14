import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import { formateDate, FormateTime } from 'utils/formateDate';

function Notices() {
   return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
         <NoticeItem />
         <Divider variant='inset' component='li' />
      </List>
   );
}

function NoticeItem() {
   return (
      <ListItem alignItems='flex-start'>
         <ListItemAvatar>
            <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
         </ListItemAvatar>
         <ListItemText
            primary={
               <Box display='flex' justifyContent='space-between'>
                  <Typography
                     sx={{ display: 'inline' }}
                     component='span'
                     variant='body2'
                     color='text.primary'
                  >
                     Summer BBQ
                  </Typography>
                  <Typography
                     sx={{ display: 'inline' }}
                     component='span'
                     variant='body2'
                     color='text.secondary'
                  >
                     {FormateTime(new Date())}
                  </Typography>
               </Box>
            }
            secondary={
               <Stack spacing={1}>
                  <Typography
                     sx={{ display: 'inline' }}
                     component='span'
                     variant='body2'
                     color='text.disabled'
                  >
                     Do you have Paris recommendations? Have you ever…
                  </Typography>
                  <Typography
                     sx={{ display: 'inline' }}
                     component='span'
                     variant='body2'
                     color='text.secondary'
                  >
                     {formateDate(new Date())}
                  </Typography>
               </Stack>
            }
         />
      </ListItem>
   );
}

export default Notices;
