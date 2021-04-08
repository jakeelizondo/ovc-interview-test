import * as actionTypes from '../actions/actionTypes';
import { Post } from '../../posts.model';

interface DefaultState {
  posts?: Post[];
  loadingPosts: boolean;
  postsError: string | null;
}

const initialState: DefaultState = {
  posts: [],
  loadingPosts: false,
  postsError: null,
};

const postReducer = (
  state: DefaultState = initialState,
  action: actionTypes.PostDispatchTypes
): DefaultState => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        loadingPosts: false,
        posts: action.payload.posts,
      };
    case actionTypes.GET_POSTS_FAIL:
      return {
        ...state,
        loadingPosts: false,
        postsError: 'Error loading posts',
      };
    case actionTypes.LOADING_POSTS:
      return { ...state, loadingPosts: true };
    default:
      return state;
  }
};

export default postReducer;
