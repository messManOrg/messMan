import { Add, Remove } from '@mui/icons-material';
import {
   Card,
   CardContent,
   Collapse,
   IconButton,
   Stack,
   Typography,
} from '@mui/material';
import SwitchButton from 'components/SwitchButton';
import { useMealDispatch, useMealState } from 'store/meal/Provider';

const GuestMealStatusButton: React.FC = () => {
   const { guestMealStatus, guestMealAmount } = useMealState();
   const dispatchMeal = useMealDispatch();

   function toggleGuestMealSwitch() {
      dispatchMeal({ type: 'set-status/guest-meal' });
   }

   function handleGuestMealInc() {
      dispatchMeal({ type: 'inc-amount/guest-meal' });
   }

   function handleGuestMealDec() {
      dispatchMeal({ type: 'dec-amount/guest-meal' });
   }

   return (
      <>
         <SwitchButton
            checked={guestMealStatus}
            // color='inherit'
            onClick={toggleGuestMealSwitch}
         >
            Guest Meal
         </SwitchButton>

         <Collapse in={guestMealStatus} timeout='auto'>
            <Card>
               <CardContent sx={{ py: '0 !important' }}>
                  <Stack
                     direction='row'
                     alignItems='center'
                     justifyContent='space-between'
                  >
                     Guest Meal Amount
                     <Stack direction='row' alignItems='center'>
                        <IconButton onClick={handleGuestMealDec}>
                           <Remove />
                        </IconButton>
                        <Typography fontWeight='bold' paddingX={1}>
                           {guestMealAmount}
                        </Typography>
                        <IconButton onClick={handleGuestMealInc}>
                           <Add />
                        </IconButton>
                     </Stack>
                  </Stack>
               </CardContent>
            </Card>
         </Collapse>
      </>
   );
};

export default GuestMealStatusButton;
