import React from 'react';
import initialState, { IAuthState } from './initialState';
import authReducer from './reducer';
// import OverlayLoading from 'components/OverlayLoading';

interface AuthContextType {
   // eslint-disable-next-line no-unused-vars
   signInWithEmail: (callback: VoidFunction) => void;
   // eslint-disable-next-line no-unused-vars
   signInWithGoogle: (callback: VoidFunction) => void;
   // eslint-disable-next-line no-unused-vars
   signOut: (callback: VoidFunction) => void;
   // eslint-disable-next-line no-unused-vars
   userRole: (callback: VoidFunction, member?: string) => void;
}

const AuthContext = React.createContext<{
   currentUser: IAuthState['currentUser'];
   role: IAuthState['role'];
}>(null!);

const AuthActionContext = React.createContext({} as AuthContextType);

const AuthProvider: React.FC<React.PropsWithChildren> = props => {
   const [state, dispatch] = React.useReducer(authReducer, initialState);
   // const [isLoading, setIsLoading] = React.useState(true);

   // function handleError(error: any) {
   //    console.error(error);
   //    setIsLoading(false);
   // }

   const user = {
      displayName: 'Some Body',
      phoneNumber: '01300000',
   };

   function signInWithEmail(callback: VoidFunction) {
      dispatch({
         type: 'setUser',
         payload: user,
      });
      callback();
   }

   function signInWithGoogle(callback: VoidFunction) {
      dispatch({
         type: 'setUser',
         payload: user,
      });
      callback();
   }

   function signOut(callback: VoidFunction) {
      dispatch({
         type: 'setUser',
         payload: null,
      });
      callback();
   }
   function userRole(callback: VoidFunction, member?: string) {
      {
         member
            ? dispatch({
                 type: 'joinMess',
                 payload: user,
              })
            : dispatch({
                 type: 'createMess',
                 payload: user,
              });
      }

      callback();
   }

   const actions = {
      signInWithEmail,
      signInWithGoogle,
      signOut,
      userRole,
   };

   return (
      <AuthActionContext.Provider value={actions}>
         {/* state might update more frequently than actions */}
         <AuthContext.Provider value={state}>
            {props.children}
         </AuthContext.Provider>
      </AuthActionContext.Provider>
   );
};

export const useAuth = () => React.useContext(AuthContext);
export const useAuthActions = () => React.useContext(AuthActionContext);
export default AuthProvider;
