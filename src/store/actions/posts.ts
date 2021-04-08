import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getPosts = (id: number) => {
  return async (dispatch: Dispatch<actionTypes.PostDispatchTypes>) => {
    dispatch({ type: actionTypes.LOADING_POSTS });
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      dispatch({
        type: actionTypes.GET_POSTS_SUCCESS,
        payload: { posts: res.data },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_POSTS_FAIL,
      });
    }
  };
};

export const clearPosts = () => {
  return { type: actionTypes.CLEAR_POSTS };
};

export const clearPostsError = () => {
  return { type: actionTypes.CLEAR_POSTS_ERROR };
};
