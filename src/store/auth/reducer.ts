import { IAuthState, User } from './initialState';

interface SetUser {
   type: 'setUser';
   payload: User | null;
}

interface JoinMess {
   type: 'joinMess';
}

interface CreateMess {
   type: 'createMess';
}

export type Action = SetUser | JoinMess | CreateMess;

function authReducer(state: IAuthState, action: Action): IAuthState {
   switch (action.type) {
      case 'setUser':
         return {
            ...state,
            currentUser: action.payload as User,
         };
      case 'createMess':
         return {
            ...state,
            currentUser: {
               ...state.currentUser,
               role: 'Manager',
            },
         };
      case 'joinMess':
         return {
            ...state,
            currentUser: {
               ...state.currentUser,
               role: 'Member',
            },
         };

      default:
         throw new Error('Unexpected action: ' + action.type);
   }
}

export default authReducer;
