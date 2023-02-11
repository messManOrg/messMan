import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import RequireAuth from 'components/RequireAuth';

function OnBoardLayout() {
   return (
      <RequireAuth>
         <Container sx={{ py: 2 }} maxWidth='sm'>
            <Outlet />
         </Container>
      </RequireAuth>
   );
}

export default OnBoardLayout;
