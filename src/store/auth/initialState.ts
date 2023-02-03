interface User {
   displayName?: string;
   phoneNumber?: string;
}

export interface IAuthState {
   currentUser: User | null;
   role: 'owner' | 'manger' | 'member' | null;
}

const initialState = {
   currentUser: null,
   role: null,
} satisfies IAuthState;

export default initialState;
