import React from 'react';
import { Box, Card, Container } from '@mui/material';
import styled from '@emotion/styled';

function DialogWrapper({ children }: { children: React.ReactNode }) {
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
export default DialogWrapper;
