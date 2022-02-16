import { Fab, styled } from '@mui/material';

export const FabStyled = styled(Fab)(({ theme }) => ({
   position: 'fixed',
   bottom: theme.spacing(9),
   right: theme.spacing(2),
}));
