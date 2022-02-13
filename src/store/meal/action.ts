type MealActionTypes =
   | 'set-status/meal'
   | 'inc-amount/meal'
   | 'dec-amount/meal'
   | 'set-status/guest-meal'
   | 'inc-amount/guest-meal'
   | 'dec-amount/guest-meal';

export interface IMealAction {
   type: MealActionTypes;
   payload?: any;
}

// export default function action(
//    type: IAction['type'],
//    payload?: IAction['payload']
// ): IAction {
//    return { type, payload };
// }
