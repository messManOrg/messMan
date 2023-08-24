import { PropsWithChildren } from 'react';
import AuthProvider from 'store/auth/Provider';
import MealStoreProvider from 'store/meal/Provider';

export default function RootProvider(props: PropsWithChildren) {
   return (
      <AuthProvider>
         <MealStoreProvider>{props.children}</MealStoreProvider>
      </AuthProvider>
   );
}
