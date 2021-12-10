import { styled } from '@mui/material';
import Box from '@mui/material/Box';

const CardContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: '100vh',
   width: '100vw',
});
const SocialContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
});

export { CardContainer,SocialContainer };
