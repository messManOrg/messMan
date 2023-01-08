import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MealStoreProvider from 'store/meal/Provider';

export default function RootProvider(props: PropsWithChildren) {
   return (
      // <BrowserRouter>
      <MealStoreProvider>{props.children}</MealStoreProvider>
      // </BrowserRouter>
   );
}
