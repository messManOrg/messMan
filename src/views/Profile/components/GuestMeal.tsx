import { Collapse, Paper } from '@mui/material';
import DayPickerStyled from 'components/DayPickerStyled';
import SwitchButton from 'components/SwitchButton';
import { useState } from 'react';
import { useMealDispatch, useMealState } from 'store/meal/Provider';

const GuestMeal: React.FC = () => {
   const { guestMealStatus } = useMealState();
   const dispatchMeal = useMealDispatch();
   const [selectedDays, setSelectedDays] = useState<Date[]>();

   function toggleGuestMeal() {
      dispatchMeal({ type: 'set-status/guest-meal' });
   }

   // function handleGuestMealInc() {
   //    dispatchMeal({ type: 'inc-amount/guest-meal' });
   // }

   // function handleGuestMealDec() {
   //    dispatchMeal({ type: 'dec-amount/guest-meal' });
   // }

   return (
      <Paper>
         <SwitchButton
            checked={guestMealStatus}
            color='secondary'
            onClick={toggleGuestMeal}
         >
            Guest Meal
         </SwitchButton>

         <Collapse in={guestMealStatus} timeout='auto'>
            <DayPickerStyled
               mode='multiple'
               selected={selectedDays}
               onSelect={setSelectedDays}
            />
         </Collapse>
      </Paper>
   );
};

export default GuestMeal;
