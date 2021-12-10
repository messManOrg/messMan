import {
   AppBar,
   Avatar,
   Chip,
   Container,
   IconButton,
   Toolbar,
   Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import config from '../../config';
import { RoutePaths } from '../../enums/routes';

const TheAppBar: React.FC = () => {
   return (
      <AppBar position='static'>
         <Container maxWidth='md'>
            <Toolbar sx={{ px: 0 }} variant='dense'>
               <IconButton>
                  <Avatar
                     component={Link}
                     to={RoutePaths.Home}
                     sx={{ textDecoration: 'none' }}
                  >
                     {config.HOSTEL_NAME.charAt(0)}
                  </Avatar>
               </IconButton>

               <Typography noWrap variant='h6' paddingX={1}>
                  {config.HOSTEL_NAME}
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
};

export default TheAppBar;
