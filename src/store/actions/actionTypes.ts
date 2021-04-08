import { User } from '../../users.model';
import { Post } from '../../posts.model';

// USER ACTIONS

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export const LOADING_USERS = 'LOADING_USERS';
export const CLEAR_USERS_ERROR = 'CLEAR_USERS_ERROR';

export interface UsersLoading {
  type: typeof LOADING_USERS;
}

export interface GetUsersFail {
  type: typeof GET_USERS_FAIL;
}

export interface GetUsersSuccess {
  type: typeof GET_USERS_SUCCESS;
  payload: { users: User[] };
}

export interface ClearUsersError {
  type: typeof CLEAR_USERS_ERROR;
}

export type UserDispatchTypes =
  | UsersLoading
  | GetUsersFail
  | GetUsersSuccess
  | ClearUsersError;

// POST ACTIONS

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';
export const LOADING_POSTS = 'LOADING_POSTS';
export const CLEAR_POSTS = 'CLEAR_POSTS';
export const CLEAR_POSTS_ERROR = 'CLEAR_POSTS_ERROR';

export interface PostsLoading {
  type: typeof LOADING_POSTS;
}

export interface GetPostsFail {
  type: typeof GET_POSTS_FAIL;
}

export interface GetPostsSuccess {
  type: typeof GET_POSTS_SUCCESS;
  payload: { posts: Post[] };
}

export interface ClearPosts {
  type: typeof CLEAR_POSTS;
}

export interface ClearPostsError {
  type: typeof CLEAR_POSTS_ERROR;
}

export type PostDispatchTypes =
  | PostsLoading
  | GetPostsFail
  | GetPostsSuccess
  | ClearPosts
  | ClearPostsError;
