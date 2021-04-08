import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getUsers = () => {
  return async (dispatch: Dispatch<actionTypes.UserDispatchTypes>) => {
    console.log('getting users');
    dispatch({ type: actionTypes.LOADING_USERS });
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');

      dispatch({
        type: actionTypes.GET_USERS_SUCCESS,
        payload: { users: res.data },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_USERS_FAIL,
      });
    }
  };
};
