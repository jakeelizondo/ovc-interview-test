import React from 'react';
import { shallow } from 'enzyme';
import {
  testFunc,
  testPostsArr,
  testUsersArr,
  testFilterTerm,
} from '../../utility/test-helpers';
import UserTable from './UserTable';

const setup = (
  isViewingPosts: boolean,
  isFiltering: boolean,
  filterTerm: string
) => {
  const component = shallow(
    <UserTable
      users={testUsersArr}
      posts={testPostsArr}
      isFiltering={isFiltering}
      filterTerm={filterTerm}
      isViewingPosts={isViewingPosts}
      onRowClick={testFunc}
    />
  );
  return component;
};

let container: any;

describe('User Table', () => {
  let component: any;

  describe('User Table INITIAL STATE', () => {
    beforeEach(() => {
      component = setup(false, false, '');
    });

    it('Should render without crashing', () => {
      expect(component.length).toBe(1);
    });

    it('Should render a <table>', () => {
      container = component.find('table');
      expect(container.length).toBe(1);
    });

    it('Should render a <tbody>', () => {
      container = component.find('tbody');
      expect(container.length).toBe(1);
    });

    it('should have the same number of tr tags as users', () => {
      container = component.find('tbody');
      expect(container.props().children).toHaveLength(testUsersArr.length);
    });
  });

  describe('User Table FILTERING', () => {
    beforeEach(() => {
      component = setup(false, true, testFilterTerm);
    });

    it('Should render without crashing', () => {
      expect(component.length).toBe(1);
    });

    it('Should render a <table>', () => {
      container = component.find('table');
      expect(container.length).toBe(1);
    });

    it('Should render a <tbody>', () => {
      container = component.find('tbody');
      expect(container.length).toBe(1);
    });

    it('should only include rows with user name including search term', () => {
      container = component.find('tbody');
      const rows = container.props().children[1];
      rows.forEach((row: any) => {
        expect(
          row.props.user.name
            .toLowerCase()
            .includes(testFilterTerm.toLowerCase())
        ).toBe(true);
      });
    });
  });

  describe('User Table VIEWING POSTS', () => {
    beforeEach(() => {
      component = setup(true, false, '');
    });

    it('Should render without crashing', () => {
      expect(component.length).toBe(1);
    });

    it('Should render a <table>', () => {
      container = component.find('table');
      expect(container.length).toBe(1);
    });

    it('Should render a <tbody>', () => {
      container = component.find('tbody');
      expect(container.length).toBe(1);
    });

    it('should have the same number of tr tags as posts', () => {
      container = component.find('tbody');
      expect(container.props().children[2]).toHaveLength(testPostsArr.length);
    });
  });
});
