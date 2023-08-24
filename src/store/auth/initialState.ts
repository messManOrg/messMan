import { UserRole } from 'enums';
import { Profile } from 'types';

export interface User {
   id: string;
   phone: string;
   email: string;
   name: string;
   createdAt: Date;
   role: keyof typeof UserRole | null;
   profile?: Profile;
}

export interface IAuthState {
   currentUser: User;
}

const initialState = {
   currentUser: null,
} as unknown as IAuthState;

export default initialState;
