import { Chip, ChipProps, Stack, styled } from '@mui/material';
import { format } from 'date-fns';

interface Props {
   items: number[];
}

export default function MealIndicator({ items }: Props) {
   return (
      <Stack direction='row' spacing={1}>
         {items.map((meal, i) => (
            <ChipStyle
               key={i}
               color={getColor(meal)}
               label={meal === 0 ? 'X' : meal}
            />
         ))}
      </Stack>
   );
}

interface MealDayProps {
   days: Date[];
}

export function MealDay({ days }: MealDayProps) {
   return (
      <Stack direction='row' spacing={1}>
         {days.map(day => {
            const dayName = format(day, 'EEEEEE');

            return <ChipStyle key={dayName} label={dayName} />;
         })}
      </Stack>
   );
}

const ChipStyle = styled(Chip)(({ theme }) => ({
   width: theme.spacing(3.5),
   height: theme.spacing(3.5),
   fontWeight: 'bold',

   '.MuiChip-label': {
      padding: 0,
   },
}));

function getColor(value: number): ChipProps['color'] {
   switch (value) {
      case 0.5:
         return 'info';
      case 1:
         return 'primary';
      case 1.5:
         return 'success';
      default:
         return 'default';
   }
}
