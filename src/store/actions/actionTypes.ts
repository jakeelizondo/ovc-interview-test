import { User } from '../../users.model';
import { Post } from '../../posts.model';

// USER ACTIONS

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export const LOADING_USERS = 'LOADING_USERS';

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

export type UserDispatchTypes = UsersLoading | GetUsersFail | GetUsersSuccess;

// POST ACTIONS

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';
export const LOADING_POSTS = 'LOADING_POSTS';

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

export type PostDispatchTypes = PostsLoading | GetPostsFail | GetPostsSuccess;
