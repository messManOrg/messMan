import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar';
import BottomNavBar from '../BottomNavBar';
import RequireAuth from '../RequireAuth';

const Layout = () => {
   return (
      <>
         <AppBar />
         <RequireAuth>
            <Container sx={{ py: 2 }} maxWidth='sm'>
               <Outlet />
            </Container>
         </RequireAuth>
         <BottomNavBar />
      </>
   );
};

export default Layout;
