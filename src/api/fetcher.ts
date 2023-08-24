import _axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const axios = _axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_API}/api`,
   withCredentials: true,
});

async function fetcher<T>(url: string, config?: AxiosRequestConfig) {
   try {
      const { data } = await axios<T>(url, config);

      return data;
   } catch (axiosError) {
      const error = axiosError as AxiosError;

      // the error boundary in RequireAuth doesn't always catch this error
      // and there is no way to use a hook outside a hook or component
      // and no way to update the current state without a reload
      if (error.response?.status === 401) {
         localStorage.removeItem('auth');
         window.location.pathname = '/login';
      }

      throw error.response?.data;
   }
}

export default fetcher;
