import React from 'react';
import initialState, { IAuthState } from './initialState';
import authReducer from './reducer';
// import OverlayLoading from 'components/OverlayLoading';

interface AuthContextType {
   currentUser: IAuthState['currentUser'];
   signInWithEmail: (callback: VoidFunction) => void;
   signInWithGoogle: (callback: VoidFunction) => void;
   signOut: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider: React.FC<PropsWithChildren> = props => {
   const [{ currentUser }, dispatch] = React.useReducer(
      authReducer,
      initialState
   );
   const [isLoading, setIsLoading] = React.useState(true);

   function handleError(error: any) {
      console.error(error);
      setIsLoading(false);
   }

   function signInWithEmail(callback: VoidFunction) {
      callback();
   }

   function signInWithGoogle(callback: VoidFunction) {
      callback();
   }

   function signOut(callback: VoidFunction) {
      callback();
   }

   const value = {
      currentUser,
      signInWithEmail,
      signInWithGoogle,
      signOut,
   };

   return (
      <AuthContext.Provider value={value}>
         {props.children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => React.useContext(AuthContext);
export default AuthProvider;
