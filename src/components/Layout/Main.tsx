import { Container, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/Layout/components/AppBar';
import BottomNavBar from 'components/Layout/components/BottomNavBar';
import RequireAuth from 'components/RequireAuth';

function MainLayout() {
   return (
      <RequireAuth>
         <AppBar />

         <Container sx={{ py: 2 }} maxWidth='sm'>
            <Outlet />
         </Container>

         <Toolbar />
         <BottomNavBar />
      </RequireAuth>
   );
}

export default MainLayout;
