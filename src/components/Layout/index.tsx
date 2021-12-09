import { Container } from '@mui/material';
import AppBar from '../AppBar';
import BottomNavBar from '../BottomNavBar';
import RequireAuth from '../RequireAuth';

const Layout: React.FC = ({ children }) => {
   return (
      <>
         <AppBar />
         <RequireAuth>
            <Container maxWidth='sm'>{children}</Container>
         </RequireAuth>
         <BottomNavBar />
      </>
   );
};

export default Layout;
