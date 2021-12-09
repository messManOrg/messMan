import { createContext, useContext, useMemo, useState } from 'react';
import fakeAuth from './fakeAuth';

interface AuthContextType {
   user: any;
   signin: (user: string, callback: VoidFunction) => void;
   signout: (callback: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextType>(null!);

export function useAuth() {
   return useContext(AuthContext);
}

const AuthProvider: React.FC = ({ children }) => {
   let [user, setUser] = useState<any>(null);

   let signin = (newUser: string, callback: VoidFunction) => {
      return fakeAuth.signin(() => {
         setUser(newUser);
         callback();
      });
   };

   let signout = (callback: VoidFunction) => {
      return fakeAuth.signout(() => {
         setUser(null);
         callback();
      });
   };

   let memorizedValue = useMemo(() => ({ user, signin, signout }), [user]);

   return (
      <AuthContext.Provider value={memorizedValue}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
