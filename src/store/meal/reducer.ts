import { IMealAction } from './action';
import { IMealState } from './initialState';
import config from 'config';

function mealReducer(
   state: IMealState,
   { type, payload }: IMealAction
): IMealState {
   function newState(updatedStateProps: Partial<IMealState>) {
      return {
         ...state,
         ...updatedStateProps,
      };
   }

   switch (type) {
      case 'set-status/meal': {
         return newState({
            mealStatus: !state.mealStatus,
            mealAmount: 1,
            guestMealStatus: false,
         });
      }

      case 'set-status/guest-meal': {
         return newState({
            mealStatus: true,
            mealAmount: 1,
            guestMealStatus: !state.guestMealStatus,
            guestMealAmount: 1,
         });
      }

      case 'inc-amount/meal': {
         if (state.mealAmount === config.maxMealAmount) {
            return state;
         }

         return newState({
            mealAmount: state.mealAmount + 0.5,
         });
      }

      case 'dec-amount/meal': {
         if (state.mealAmount <= config.minMealAmount) {
            return newState({
               mealStatus: false,
               guestMealStatus: false,
            });
         }

         return newState({
            mealAmount: state.mealAmount - 0.5,
         });
      }

      case 'inc-amount/guest-meal': {
         if (state.guestMealAmount === config.maxGuestMealAmount) {
            return state;
         }

         return newState({
            guestMealAmount: state.guestMealAmount + 1,
         });
      }

      case 'dec-amount/guest-meal': {
         if (state.guestMealAmount <= config.minGuestMealAmount) {
            return newState({
               guestMealStatus: false,
            });
         }

         return newState({
            guestMealAmount: state.guestMealAmount - 1,
         });
      }

      default:
         throw new Error('Unexpected action: ' + type);
   }
}

export default mealReducer;
