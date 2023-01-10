export interface IAuthState {
   currentUser: boolean | null;
}

const initialState: IAuthState = {
   currentUser: false,
};

export default initialState;
