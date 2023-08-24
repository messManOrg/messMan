global.console.err = error => {
   if (error instanceof Error) {
      return console.error(error.message);
   }

   console.error(error);
};

declare global {
   interface Console {
      err: (error: unknown) => void;
   }
}

export class Storage {
   get(key: 'auth') {
      try {
         return JSON.parse(localStorage.getItem(key) as string);
      } catch (error) {
         console.error(error);
      }
   }

   set(key: 'auth', value: unknown) {
      try {
         return localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
         console.err(error);
      }
   }
}

const storage = new Storage();
export default storage;
