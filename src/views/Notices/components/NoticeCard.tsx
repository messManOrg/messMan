import { Box, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { formatDate, formatTime } from 'utils';

function NoticeCard() {
   return (
      <ListItem alignItems='flex-start'>
         <ListItemAvatar>
            <Avatar alt='Shakil' src='/static/images/avatar/3.jpg' />
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
                     Shakil Hossain
                  </Typography>
                  <Typography
                     sx={{ display: 'inline' }}
                     component='span'
                     variant='body2'
                     color='text.secondary'
                  >
                     {formatDate(new Date())}
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
                     {formatTime(new Date())}
                  </Typography>
               </Stack>
            }
         />
      </ListItem>
   );
}
export default NoticeCard;
