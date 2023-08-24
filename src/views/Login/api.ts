import fetcher from 'api/fetcher';
import { User } from 'store/auth/initialState';
import useSWRMutation from 'swr/mutation';

interface Data {
   access_token: string;
   user: User;
}

async function login(url: string, { arg }: { arg: unknown }) {
   const data = await fetcher<Data>(url, {
      method: 'POST',
      data: arg,
   });

   return data.user;
}

export function useLogin() {
   const res = useSWRMutation('/login', login);

   return res;
}
