import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, clearUsersError } from '../../store/actions/users';
import {
  clearPosts,
  clearPostsError,
  getPosts,
} from '../../store/actions/posts';
import { RootStore } from '../../store/store';

import SearchBar from '../../components/SearchBar/SearchBar';
import UserTable from '../UserTable/UserTable';
import HeadingBar from '../../components/HeadingBar/HeadingBar';
import ErrorBar from '../../components/ErrorBar/ErrorBar';
import './App.css';

const errorMessages = {
  userErr:
    'There was an error loading your users. Please refresh the page and try again.',
  postErr:
    'There was an error loading the posts for this user. Please refresh the page and try again.',
};

const App = () => {
  // INITIALIZE LOCAL COMPONENT STATE
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterTerm, setFilterTerm] = useState('');
  const [focusUser, setFocusUser] = useState('');
  const [isViewingPosts, setIsViewingPosts] = useState(false);

  const dispatch = useDispatch();

  // FETCH AND SET USERS/RESET ANY ERRORS UPON COMPONENT MOUNT

  useEffect(() => {
    dispatch(clearUsersError());
    dispatch(clearPostsError());
    dispatch(getUsers());
  }, [dispatch]);

  // REDUX GLOBAL STATE SELECTORS

  const isLoadingUsers = useSelector(
    (state: RootStore) => state.users.loadingUsers
  );
  const isLoadingPosts = useSelector(
    (state: RootStore) => state.posts.loadingPosts
  );
  const usersArr = useSelector((state: RootStore) => state.users.users);
  const postsArr = useSelector((state: RootStore) => state.posts.posts);
  const userError = useSelector((state: RootStore) => state.users.usersError);
  const postError = useSelector((state: RootStore) => state.posts.postsError);

  // HANDLER FUNCTIONS

  const handleFilterUsers = (text: string) => {
    setIsFiltering(true);
    setFilterTerm(text.trim());
  };

  const handleTableReset = () => {
    setIsFiltering(false);
    setFilterTerm('');
  };

  const handleRowClick = (id: number, user: string) => {
    dispatch(getPosts(id));
    setFocusUser(user);
    setIsViewingPosts(true);
  };

  const handlePostViewBackClick = () => {
    setIsFiltering(false);
    setFilterTerm('');
    setFocusUser('');
    dispatch(clearPosts());
    dispatch(clearUsersError());
    dispatch(clearPostsError());
    setIsViewingPosts(false);
  };

  return (
    <React.Fragment>
      <header>User Explorer</header>
      <div className="App">
        {userError ? <ErrorBar message={errorMessages.userErr} /> : null}
        {postError ? <ErrorBar message={errorMessages.postErr} /> : null}
        {usersArr !== undefined ? (
          <div className="table-container">
            {isLoadingUsers || isLoadingPosts ? (
              <p className="load-message">Loading...</p>
            ) : null}

            {isViewingPosts && !userError && !postError ? (
              <HeadingBar
                headingText={`${focusUser}'s Posts:`}
                onButtonClick={handlePostViewBackClick}
              />
            ) : null}

            {!isViewingPosts && !userError && !postError ? (
              <SearchBar
                isFiltering={isFiltering}
                onReset={handleTableReset}
                onFilter={handleFilterUsers}
              />
            ) : null}

            {userError || postError ? null : (
              <UserTable
                users={usersArr}
                posts={!!postsArr ? postsArr : []}
                isFiltering={isFiltering}
                isViewingPosts={isViewingPosts}
                filterTerm={filterTerm}
                onRowClick={handleRowClick}
              />
            )}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default App;
