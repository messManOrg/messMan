import { Paper, styled } from '@mui/material';

export const RootStyle = styled(Paper)(({ theme }) => ({
   '.rdp': {
      '--rdp-cell-size': theme.spacing(5.5),
      '--rdp-accent-color': theme.palette.action.selected,
      padding: theme.spacing(2),
   },
   '.rdp-months': {
      justifyContent: 'center',
   },
}));
