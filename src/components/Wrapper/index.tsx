import styled from '@emotion/styled';
import { Box, Card, Container } from '@mui/material';
import React from 'react';

function Wrapper({ children }: { children: React.ReactNode }) {
   return (
      <CardContainer>
         <Container maxWidth='sm'>
            <Card
               sx={{
                  py: '2rem',
                  px: '1rem',
               }}
            >
               {children}
            </Card>
         </Container>
      </CardContainer>
   );
}

const CardContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: '80vh',
});
export default Wrapper;
