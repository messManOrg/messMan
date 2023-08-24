import React, { useEffect } from 'react';
import { mutate } from 'swr';
import initialState, { IAuthState, User } from './initialState';
import authReducer, { Action } from './reducer';

interface AuthContextType {
   dispatch: React.Dispatch<Action>;
   signIn: (payload: User, callback?: VoidFunction) => void;
   signOut: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext({} as IAuthState);
const AuthActionContext = React.createContext({} as AuthContextType);

const AuthProvider: React.FC<React.PropsWithChildren> = props => {
   const [state, dispatch] = React.useReducer(
      authReducer,
      initialState,
      initial => {
         if (typeof localStorage === 'undefined') return initial;

         return JSON.parse(localStorage.getItem('auth') as string) || initial;
      }
   );

   useEffect(() => {
      localStorage.setItem('auth', JSON.stringify(state));
   }, [state]);

   function signIn(payload: User, cb: VoidFunction | undefined) {
      dispatch({
         type: 'setUser',
         payload,
      });

      cb && cb();
   }

   function signOut(cb: VoidFunction) {
      dispatch({
         type: 'setUser',
         payload: null,
      });

      // clear swr cache
      mutate(() => true, undefined, {
         revalidate: false,
      });

      cb();
   }

   const actions = {
      signIn,
      signOut,
      dispatch,
   };

   return (
      <AuthActionContext.Provider value={actions}>
         <AuthContext.Provider value={state}>
            {props.children}
         </AuthContext.Provider>
      </AuthActionContext.Provider>
   );
};

export const useAuth = () => React.useContext(AuthContext);
export const useAuthActions = () => React.useContext(AuthActionContext);
export default AuthProvider;
