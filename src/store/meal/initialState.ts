export interface IMealState {
   mealStatus: boolean;
   mealAmount: number;
   guestMealStatus: boolean;
   guestMealAmount: number;
}

const initialState: IMealState = {
   mealStatus: true,
   mealAmount: 1,
   guestMealStatus: false,
   guestMealAmount: 0,
};

export default initialState;
