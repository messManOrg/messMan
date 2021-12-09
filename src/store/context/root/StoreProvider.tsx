import { createContext, useContext, useMemo } from 'react';

let StoreContext = createContext<any>(null!);

export function useStore() {
   return useContext(StoreContext);
}

const StoreProvider: React.FC = ({ children }) => {
   let memorizedValue = useMemo(() => null, []);

   return (
      <StoreContext.Provider value={memorizedValue}>
         {children}
      </StoreContext.Provider>
   );
};

export default StoreProvider;
