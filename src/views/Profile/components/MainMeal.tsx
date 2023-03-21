import { useState } from 'react';
import { Collapse, Paper, styled } from '@mui/material';
import DayPickerStyled from 'components/DayPickerStyled';
import SwitchButton from 'components/SwitchButton';
import { useMealDispatch, useMealState } from 'store/meal/Provider';

const MainMeal: React.FC = () => {
   const { mealStatus } = useMealState();
   const dispatchMeal = useMealDispatch();
   const [selectedDays, setSelectedDays] = useState<Date[]>();

   function toggleMeal() {
      dispatchMeal({ type: 'set-status/meal' });
   }

   // function handleMealInc() {
   //    dispatchMeal({ type: 'inc-amount/meal' });
   // }

   // function handleMealDec() {
   //    dispatchMeal({ type: 'dec-amount/meal' });
   // }

   return (
      <Paper>
         <SwitchButton checked={mealStatus} onClick={toggleMeal}>
            My Meal
         </SwitchButton>

         <Collapse in={mealStatus} timeout='auto'>
            <MealDayPicker
               mode='multiple'
               selected={selectedDays}
               onSelect={setSelectedDays}
            />
         </Collapse>
      </Paper>
   );
};

const MealDayPicker = styled(DayPickerStyled)(({ theme }) => ({
   '.rdp-day': {
      backgroundColor: 'var(--rdp-accent-color)',
   },

   '.rdp-day_selected': {
      backgroundColor: 'inherit',
      color: theme.palette.text.primary,
   },
}));

export default MainMeal;
