import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getUsers } from '../../store/actions/users';
import { getPosts } from '../../store/actions/posts';
import { RootStore } from '../../store/store';
import UserPosts from '../UserPosts/UserPosts';
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
  const usersArr = useSelector((state: RootStore) => state.users.users);
  const postsArr = useSelector((state: RootStore) => state.posts.posts);

  const isLoadingUsers = useSelector(
    (state: RootStore) => state.users.loadingUsers
  );

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
    <div className="App">
      {isLoadingUsers ? <p>Loading users...</p> : null}
      {usersArr !== undefined && !isViewingPosts ? (
        <div>
          <SearchBar
            isFiltering={isFiltering}
            onReset={handleTableReset}
            onFilter={handleFilterUsers}
          />
          <UserTable
            users={usersArr}
            isFiltering={isFiltering}
            filterTerm={filterTerm}
            onRowClick={handleRowClick}
          />
        </div>
      ) : null}
      {isViewingPosts && postsArr !== undefined ? (
        <UserPosts
          user={focusUser}
          posts={postsArr}
          onBack={handlePostViewBackClick}
        />
      ) : null}
    </div>
  );
};

export default App;
