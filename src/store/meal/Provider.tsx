import {
   createContext,
   PropsWithChildren,
   useContext,
   useMemo,
   useReducer,
} from 'react';
import { IMealAction } from './action';
import initialState, { IMealState } from './initialState';
import mealReducer from './reducer';

type MealContextType = [IMealState, React.Dispatch<IMealAction>];

const MealContext = createContext<MealContextType>(null!);

export const useMealStore = () => useContext(MealContext);

const MealStoreProvider: React.FC<PropsWithChildren> = props => {
   const [state, dispatch] = useReducer(mealReducer, initialState);

   const memorizedValue: MealContextType = useMemo(
      () => [state, dispatch],
      [state, dispatch]
   );

   return (
      <MealContext.Provider value={memorizedValue}>
         {props.children}
      </MealContext.Provider>
   );
};

export default MealStoreProvider;
