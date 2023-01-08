import { Card, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { CardContainer } from './style';

const AuthLayout = () => {
   return (
      <CardContainer>
         <Container maxWidth='sm'>
            <Card
               sx={{
                  py: '3rem',
                  px: '1rem',
                  m: '1rem',
               }}
            >
               <Outlet />
            </Card>
         </Container>
      </CardContainer>
   );
};

export default AuthLayout;
