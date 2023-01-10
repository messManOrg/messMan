import { PropsWithChildren } from 'react';
import MealStoreProvider from 'store/meal/Provider';

export default function RootProvider(props: PropsWithChildren) {
   return (
      //
      <MealStoreProvider>{props.children}</MealStoreProvider>
   );
}
