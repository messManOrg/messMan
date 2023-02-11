import { Paper, styled, SxProps } from '@mui/material';
import { DayPicker, DayPickerProps } from 'react-day-picker';

type Props = DayPickerProps & {
   sx?: SxProps;
};

const today = new Date();

function DayPickerStyled({ sx, ...props }: Props) {
   return (
      <PaperStyle sx={sx}>
         <DayPicker fromDate={today} {...props} />
      </PaperStyle>
   );
}

const PaperStyle = styled('div')(({ theme }) => ({
   '.rdp': {
      '--rdp-cell-size': theme.spacing(5.5),
      '--rdp-accent-color': theme.palette.action.selected,
      padding: theme.spacing(2),
   },
   '.rdp-months': {
      justifyContent: 'center',
   },
}));

export default DayPickerStyled;
