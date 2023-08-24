import fetcher from 'api/fetcher';
import useSWR from 'swr';
import { Profile } from 'types';

export function useProfile() {
   const res = useSWR('/profile', async url => {
      const data = await fetcher<Profile>(url);
      return data;
   });

   return res;
}
