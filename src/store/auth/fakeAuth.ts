const fakeAuth = {
   isAuthenticated: false,
   signin(callback: VoidFunction) {
      fakeAuth.isAuthenticated = true;
      setTimeout(callback, 50); // fake async
   },
   signout(callback: VoidFunction) {
      fakeAuth.isAuthenticated = false;
      setTimeout(callback);
   },
};

export default fakeAuth;
