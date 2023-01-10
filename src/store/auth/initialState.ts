interface User {
   displayName?: string;
   phoneNumber?: string;
}

export interface IAuthState {
   currentUser: User | null;
}

const initialState = {
   currentUser: null,
} satisfies IAuthState;

export default initialState;
