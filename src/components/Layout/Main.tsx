import { Navigate, Outlet } from 'react-router-dom';
import { Container, Toolbar } from '@mui/material';
import AppBar from 'components/Layout/components/AppBar';
import BottomNavBar from 'components/Layout/components/BottomNavBar';
import { RoutePaths } from 'enums/routes';
import { useAuth } from 'store/auth/Provider';

function MainLayout() {
   const { currentUser } = useAuth();

   if (!currentUser.role) {
      return <Navigate to={RoutePaths.Onboard} />;
   }

   return (
      <>
         <AppBar />

         <Container sx={{ py: 2 }} maxWidth='sm'>
            <Outlet />
         </Container>

         <Toolbar />
         <BottomNavBar />
      </>
   );
}

export default MainLayout;
