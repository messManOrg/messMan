import { Outlet } from 'react-router-dom';
import { Box, Card, Container, styled } from '@mui/material';

function AuthLayout() {
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
}

const CardContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: '100vh',
   width: '100vw',
});

export default AuthLayout;
