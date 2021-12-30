import { useCallback } from 'react';
import { Add, Remove } from '@mui/icons-material';
import {
   Card,
   CardContent,
   Collapse,
   IconButton,
   Stack,
   Typography,
} from '@mui/material';
import SwitchButton from '../../components/SwitchButton';
import { useMealStore } from '../../store/meal/Provider';

const MealStatusButton: React.FC = () => {
   const [{ mealStatus, mealAmount }, dispatchMeal] = useMealStore();

   const toggleMealSwitch = useCallback(() => {
      dispatchMeal({ type: 'set-status/meal' });
   }, [dispatchMeal]);

   const handleMealInc = useCallback(() => {
      dispatchMeal({ type: 'inc-amount/meal' });
   }, [dispatchMeal]);

   const handleMealDec = useCallback(() => {
      dispatchMeal({ type: 'dec-amount/meal' });
   }, [dispatchMeal]);

   return (
      <>
         <SwitchButton checked={mealStatus} onClick={toggleMealSwitch}>
            Meal Status
         </SwitchButton>
         <Collapse in={mealStatus} timeout='auto' unmountOnExit>
            <Card>
               <CardContent sx={{ py: '0 !important' }}>
                  <Stack
                     direction='row'
                     alignItems='center'
                     justifyContent='space-between'
                  >
                     Meal Amount
                     <Stack direction='row' alignItems='center'>
                        <IconButton onClick={handleMealDec}>
                           <Remove />
                        </IconButton>
                        <Typography fontWeight='bold' paddingX={1}>
                           {mealAmount}
                        </Typography>
                        <IconButton onClick={handleMealInc}>
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

export default MealStatusButton;
