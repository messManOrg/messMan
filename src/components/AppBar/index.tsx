import {
   AppBar,
   Avatar,
   Chip,
   Container,
   IconButton,
   Toolbar,
   Typography,
} from '@mui/material';

function TheAppBar() {
   return (
      <AppBar position='static'>
         <Container maxWidth='md'>
            <Toolbar sx={{ px: 0 }} variant='dense'>
               <IconButton>
                  <Avatar>H</Avatar>
               </IconButton>

               <Typography noWrap variant='h6' paddingX={1}>
                  Hostel Name
               </Typography>

               <Chip
                  sx={{
                     ml: 'auto',
                     fontWeight: 'bold',
                     fontVariant: 'oldstyle-nums',
                     fontSize: 'large',
                  }}
                  label='$100'
                  color='warning'
               />
            </Toolbar>
         </Container>
      </AppBar>
   );
}

export default TheAppBar;
