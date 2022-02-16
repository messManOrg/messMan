import {
   createContext,
   useCallback,
   useContext,
   useEffect,
   useMemo,
   useReducer,
   useState,
} from 'react';
import {
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../lib/firebase';
import initialState, { IAuthState } from './initialState';
import authReducer from './reducer';
import OverlayLoading from '../../components/OverlayLoading';

interface AuthContextType {
   currentUser: IAuthState['currentUser'];
   signInWithEmail: (callback: VoidFunction) => void;
   signInWithGoogle: (callback: VoidFunction) => void;
   signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider: React.FC = ({ children }) => {
   const [{ currentUser }, dispatch] = useReducer(authReducer, initialState);
   const [isLoading, setIsLoading] = useState(true);

   console.log('user', currentUser);
   console.log('loading', isLoading);

   const handleError = useCallback((error: any) => {
      console.error(error);
      setIsLoading(false);
   }, []);

   const signInWithEmail = useCallback((callback: VoidFunction) => {
      //
   }, []);

   const signInWithGoogle = useCallback(
      (callback: VoidFunction) => {
         signInWithPopup(auth, new GoogleAuthProvider())
            .then(() => callback())
            .catch(handleError);
      },
      [handleError]
   );

   const signOut = useCallback(
      (callback: VoidFunction) => {
         auth
            .signOut()
            .then(() => callback())
            .catch(handleError);
      },
      [handleError]
   );

   useEffect(() => {
      onAuthStateChanged(
         auth,
         user => {
            if (user) {
               dispatch({ type: 'setUser', payload: user }); //order matters
               return setIsLoading(false); //order matters
            }

            setIsLoading(false); //order matters
            dispatch({ type: 'setUser', payload: null }); //order matters
         },
         handleError
      );
   }, [currentUser, handleError]);

   const memorizedValue = useMemo(
      () => ({
         currentUser,
         signInWithEmail,
         signInWithGoogle,
         signOut,
      }),
      [currentUser, signInWithEmail, signInWithGoogle, signOut]
   );

   if (isLoading) return <OverlayLoading />;

   return (
      <AuthContext.Provider value={memorizedValue}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
