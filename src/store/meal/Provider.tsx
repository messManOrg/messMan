import React from 'react';
import { IMealAction } from './action';
import initialState, { IMealState } from './initialState';
import mealReducer from './reducer';

const MealContext = React.createContext({} as IMealState);
const MealDispatchContext = React.createContext(
   {} as React.Dispatch<IMealAction>
);

const MealStoreProvider: React.FC<React.PropsWithChildren> = props => {
   const [state, dispatch] = React.useReducer(mealReducer, initialState);

   return (
      <MealDispatchContext.Provider value={dispatch}>
         <MealContext.Provider value={state}>
            {props.children}
         </MealContext.Provider>
      </MealDispatchContext.Provider>
   );
};

export const useMealState = () => React.useContext(MealContext);
export const useMealDispatch = () => React.useContext(MealDispatchContext);
export default MealStoreProvider;
