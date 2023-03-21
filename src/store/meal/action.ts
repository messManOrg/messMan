type MealActionTypes =
   | 'set-status/meal'
   | 'inc-amount/meal'
   | 'dec-amount/meal'
   | 'set-status/guest-meal'
   | 'inc-amount/guest-meal'
   | 'dec-amount/guest-meal';

export interface IMealAction {
   type: MealActionTypes;
   payload?: unknown;
}
