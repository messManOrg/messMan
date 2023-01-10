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

const MealStatusButton: React.FC = () => {
   const { mealStatus, mealAmount } = useMealState();
   const dispatchMeal = useMealDispatch();

   function toggleMealSwitch() {
      dispatchMeal({ type: 'set-status/meal' });
   }

   function handleMealInc() {
      dispatchMeal({ type: 'inc-amount/meal' });
   }

   function handleMealDec() {
      dispatchMeal({ type: 'dec-amount/meal' });
   }

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
