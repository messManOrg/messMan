import { Container } from '@mui/material';
import AppBar from '../AppBar';
import BottomNavBar from '../BottomNavBar';
import RequireAuth from '../RequireAuth';

const Layout: React.FC = ({ children }) => {
   return (
      <>
         <AppBar />
         <RequireAuth>
            <Container sx={{ py: 2 }} maxWidth='sm'>
               {children}
            </Container>
         </RequireAuth>
         <BottomNavBar />
      </>
   );
};

export default Layout;
