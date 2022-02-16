import { IAuthState } from './initialState';

interface Action {
   type: 'setUser';
   payload: IAuthState['currentUser'];
}

export default function authReducer(
   state: IAuthState,
   action: Action
): IAuthState {
   switch (action.type) {
      case 'setUser':
         return { ...state, currentUser: action.payload };

      default:
         throw new Error('Unexpected action: ' + action.type);
   }
}
