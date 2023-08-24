import fetcher from 'api/fetcher';
import { User } from 'store/auth/initialState';
import useSWRMutation from 'swr/mutation';

interface Data {
   access_token: string;
   user: User;
}

async function register(url: string, { arg }: { arg: unknown }) {
   const data = await fetcher<Data>(url, {
      method: 'POST',
      data: arg,
   });

   return data.user;
}

export function useRegister() {
   const res = useSWRMutation('/register', register);

   return res;
}
