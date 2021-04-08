import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getUsers } from '../../store/actions/users';
import { getPosts } from '../../store/actions/posts';
import { RootStore } from '../../store/store';
import UserTable from '../UserTable/UserTable';
import './App.css';

const App = () => {
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterTerm, setFilterTerm] = useState('');
  const [focusUser, setFocusUser] = useState('');
  const [isViewingPosts, setIsViewingPosts] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const isLoadingUsers = useSelector(
    (state: RootStore) => state.users.loadingUsers
  );
  const isLoadingPosts = useSelector(
    (state: RootStore) => state.posts.loadingPosts
  );

  const usersArr = useSelector((state: RootStore) => state.users.users);
  const postsArr = useSelector((state: RootStore) => state.posts.posts);

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
    setIsViewingPosts(false);
  };

  return (
    <React.Fragment>
      <header>User Explorer</header>
      <div className="App">
        {isLoadingUsers ? (
          <p className="load-message">Loading users...</p>
        ) : null}
        {isLoadingPosts ? (
          <p className="load-message">Loading posts...</p>
        ) : null}
        {usersArr !== undefined ? (
          <div>
            {!isViewingPosts ? (
              <SearchBar
                isFiltering={isFiltering}
                onReset={handleTableReset}
                onFilter={handleFilterUsers}
              />
            ) : null}
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
            ) : null}
            <UserTable
              users={usersArr}
              posts={!!postsArr ? postsArr : []}
              isFiltering={isFiltering}
              isViewingPosts={isViewingPosts}
              filterTerm={filterTerm}
              onRowClick={handleRowClick}
            />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default App;
