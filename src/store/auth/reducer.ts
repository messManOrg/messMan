import { IAuthState } from './initialState';

interface Action {
   type: 'setUser' | 'createMess' | 'joinMess' | 'getUser';
   payload: IAuthState['currentUser'];
}

function authReducer(state: IAuthState, action: Action): IAuthState {
   switch (action.type) {
      case 'setUser':
         return {
            ...state,
            currentUser: action.payload,
         };
      case 'createMess':
         return {
            ...state,
            role: 'manger',
         };
      case 'joinMess':
         return {
            ...state,
            role: 'member',
         };
      case 'getUser':
         return {
            ...state,
         };

      default:
         throw new Error('Unexpected action: ' + action.type);
   }
}

export default authReducer;
