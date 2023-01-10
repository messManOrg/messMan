import React from 'react';
import initialState, { IAuthState } from './initialState';
import authReducer from './reducer';
// import OverlayLoading from 'components/OverlayLoading';

interface AuthContextType {
   signInWithEmail: (callback: VoidFunction) => void;
   signInWithGoogle: (callback: VoidFunction) => void;
   signOut: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<{
   currentUser: IAuthState['currentUser'];
}>(null!);

const AuthActionContext = React.createContext<AuthContextType>(
   null as unknown as AuthContextType
);

const AuthProvider: React.FC<React.PropsWithChildren> = props => {
   const [state, dispatch] = React.useReducer(authReducer, initialState);
   const [isLoading, setIsLoading] = React.useState(true);

   function handleError(error: any) {
      console.error(error);
      setIsLoading(false);
   }

   function signInWithEmail(callback: VoidFunction) {
      dispatch({ type: 'setUser', payload: true });
      callback();
   }

   function signInWithGoogle(callback: VoidFunction) {
      dispatch({ type: 'setUser', payload: true });
      callback();
   }

   function signOut(callback: VoidFunction) {
      dispatch({ type: 'setUser', payload: null });
      callback();
   }

   const actions = {
      signInWithEmail,
      signInWithGoogle,
      signOut,
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
