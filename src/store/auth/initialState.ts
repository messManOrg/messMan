import { User } from 'firebase/auth';

export interface IAuthState {
   currentUser: User | null;
}

const initialState: IAuthState = {
   currentUser: null,
};

export default initialState;
