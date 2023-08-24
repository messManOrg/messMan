import { Profile } from "types";

export interface User {
   id: string;
   phone: string;
   email: string;
   name: string;
   createdAt: Date;
   role: keyof typeof Roles | null;
   profile?: Profile
}

enum Roles {
   Owner = 'owner',
   Monitor = 'monitor',
   Manager = 'manager',
   Member = 'member',
}

export interface IAuthState {
   currentUser: User;
}

const initialState = {
   currentUser: null,
} as unknown as IAuthState;

export default initialState;
