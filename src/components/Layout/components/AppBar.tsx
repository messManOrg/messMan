import { lazy, useReducer } from 'react';
import {
   AppBar,
   Avatar,
   ButtonBase,
   Chip,
   Container,
   IconButton,
   Toolbar,
   Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import config from 'config';
import { RoutePaths } from 'enums/routes';
import BottomSheet from 'components/BottomSheet';

const BalanceSheet = lazy(() => import('./BalanceSheet'));

const TheAppBar: React.FC = () => {
   const [balanceSheet, toggleBalanceSheet] = useReducer(
      state => !state,
      false
   );

   return (
      <AppBar position='sticky'>
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
                  component={ButtonBase}
                  onClick={toggleBalanceSheet}
                  sx={{
                     ml: 'auto',
                     fontWeight: 'bold',
                     fontVariant: 'oldstyle-nums',
                     fontSize: 'large',
                  }}
                  label='$100'
                  color='warning'
               />

               <BottomSheet open={balanceSheet} onClose={toggleBalanceSheet}>
                  <BalanceSheet />
               </BottomSheet>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default TheAppBar;
