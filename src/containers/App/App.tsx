import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getUsers } from '../../store/actions/users';
import { clearPosts, getPosts } from '../../store/actions/posts';
import { RootStore } from '../../store/store';
import UserTable from '../UserTable/UserTable';
import './App.css';

const App = () => {
  // INTITIALIZE LOCAL COMPONENT STATE
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterTerm, setFilterTerm] = useState('');
  const [focusUser, setFocusUser] = useState('');
  const [isViewingPosts, setIsViewingPosts] = useState(false);

  const dispatch = useDispatch();

  // FETCH AND SET USERS UPON COMPONENT MOUNT

  useEffect(() => {
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
    console.log(id);
    dispatch(getPosts(id));
    setFocusUser(user);
    setIsViewingPosts(true);
  };

  const handlePostViewBackClick = () => {
    setIsFiltering(false);
    setFilterTerm('');
    setFocusUser('');
    dispatch(clearPosts());
    setIsViewingPosts(false);
  };

  return (
    <React.Fragment>
      <header>User Explorer</header>
      <div className="App">
        {usersArr !== undefined ? (
          <div>
            {isViewingPosts ? (
              <div>
                <button
                  className="back-button hoverable"
                  onClick={handlePostViewBackClick}
                >
                  Back to users
                </button>
                <h3 className="post-user">{`${focusUser}'s Posts:`}</h3>
              </div>
            ) : null}{' '}
            {(isLoadingUsers || isLoadingPosts) && !isViewingPosts ? (
              <p className="load-message">Loading...</p>
            ) : (
              <React.Fragment>
                <SearchBar
                  isFiltering={isFiltering}
                  onReset={handleTableReset}
                  onFilter={handleFilterUsers}
                />
                <UserTable
                  users={usersArr}
                  posts={!!postsArr ? postsArr : []}
                  isFiltering={isFiltering}
                  isViewingPosts={isViewingPosts}
                  filterTerm={filterTerm}
                  onRowClick={handleRowClick}
                />
              </React.Fragment>
            )}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default App;
