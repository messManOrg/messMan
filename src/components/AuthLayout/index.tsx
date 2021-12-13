import { Card, Container } from '@mui/material';
import { CardContainer } from './style';

const AuthLayout: React.FC = ({ children }) => {
   return (
      <>
         <CardContainer>
            <Container maxWidth='sm'>
               <Card
                  sx={{
                     py: '3rem',
                     px: '1rem',
                     m: '1rem',
                  }}
               >
                  {children}
               </Card>
            </Container>
         </CardContainer>
      </>
   );
};

export default AuthLayout;
