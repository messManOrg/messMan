import { Outlet, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { RoutePaths } from 'enums/routes';
import Roles from 'utils/roles';

function OnBoardLayout() {
   const navigate = useNavigate();
   const router = useRouter();

   if (!Roles('Owner')) {
      navigate(RoutePaths.Home);
      router.push(RoutePaths.Home);
      return null;
   }

   return (
      <Container sx={{ py: 2 }} maxWidth='sm'>
         <Outlet />
      </Container>
   );
}

export default OnBoardLayout;
