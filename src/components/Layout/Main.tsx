import { Navigate, Outlet } from 'react-router-dom';
import { Container, Toolbar } from '@mui/material';
import AppBar from 'components/Layout/components/AppBar';
import BottomNavBar from 'components/Layout/components/BottomNavBar';
import RequireAuth from 'components/RequireAuth';
import { RoutePaths } from 'enums/routes';
import { useAuth } from 'store/auth/Provider';

function MainLayout() {
   const auth = useAuth();
   if (!auth.role) {
      return <Navigate to={RoutePaths.Onboard} />;
   }
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
