import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actionTypes from './actions/actionTypes';
import * as userActions from './actions/users';
import * as postActions from './actions/posts';
import { testPostsArr, testUsersArr } from '../utility/test-helpers';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('User Actions', () => {
  describe('SYNC User Actions', () => {
    it('should create action to clear users fetch error', () => {
      const expectedAction = {
        type: actionTypes.CLEAR_USERS_ERROR,
      };
      expect(userActions.clearUsersError()).toEqual(expectedAction);
    });
  });

  describe('ASYNC user actions', () => {
    beforeEach(() => {
      store.clearActions();
    });

    it('creates GET_USER_SUCCESS when fetching posts has been done', () => {
      mock
        .onGet('https://jsonplaceholder.typicode.com/users')
        .reply(200, { response: testUsersArr });

      store.dispatch(userActions.getUsers()).then(() => {
        let expectedActions = [
          { type: actionTypes.LOADING_USERS },
          {
            type: actionTypes.GET_USERS_SUCCESS,
            payload: { users: { response: testUsersArr } },
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('Post Actions', () => {
  describe('SYNC post actions', () => {
    it('should create action to clear posts fetch error', () => {
      const expectedAction = {
        type: actionTypes.CLEAR_POSTS_ERROR,
      };
      expect(postActions.clearPostsError()).toEqual(expectedAction);
    });

    it('should create action to clear posts ', () => {
      const expectedAction = {
        type: actionTypes.CLEAR_POSTS,
      };
      expect(postActions.clearPosts()).toEqual(expectedAction);
    });
  });

  describe('ASYNC post actions', () => {
    beforeEach(() => {
      store.clearActions();
    });

    it('creates GET_POSTS_SUCCESS when fetching posts has been done', () => {
      mock
        .onGet(`https://jsonplaceholder.typicode.com/posts?userId=1`)
        .reply(200, { response: testPostsArr });

      store.dispatch(postActions.getPosts(1)).then(() => {
        let expectedActions = [
          { type: actionTypes.LOADING_POSTS },
          {
            type: actionTypes.GET_POSTS_SUCCESS,
            payload: { posts: { response: testPostsArr } },
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
