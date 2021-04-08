import * as actionTypes from '../actions/actionTypes';
import { User } from '../../users.model';

interface DefaultState {
  users?: User[];
  loadingUsers: boolean;
  usersError: string | null;
}

const initialState: DefaultState = {
  users: [],
  loadingUsers: false,
  usersError: null,
};

const userReducer = (
  state: DefaultState = initialState,
  action: actionTypes.UserDispatchTypes
): DefaultState => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return { ...state, loadingUsers: false, users: action.payload.users };
    case actionTypes.GET_USERS_FAIL:
      return {
        ...state,
        loadingUsers: false,
        usersError: 'Error loading users',
      };
    case actionTypes.LOADING_USERS:
      return { ...state, loadingUsers: true };
    default:
      return state;
  }
};

export default userReducer;
