import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { testPostsArr } from '../../utility/test-helpers';
import UserPostRow from './UserPostRow';

let container: any;
const testPost = testPostsArr[0];

const setup = () => {
  const component = shallow(<UserPostRow post={testPost} />);
  return component;
};

describe('User Post Row', () => {
  let component: any;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without crashing', () => {
    expect(component.length).toBe(1);
  });

  describe('User Post Row <tr>', () => {
    it('should render one <tr>', () => {
      container = component.find('tr');
      expect(container.length).toBe(1);
    });
  });

  describe('User Post Row <td>', () => {
    //extract relevant fields off of post, which will be used for actual cells
    const { title, body } = testPost;
    const postRowData = [title, body];

    it('should render cells equal to target fields on post object passed in', () => {
      container = component.find('td');
      expect(container.length).toBe(Object.keys(postRowData).length);
    });

    it('should render a cell with each field of data passed in', () => {
      container = component.find('tr');
      expect(container.text()).toEqual(postRowData.join(''));
    });
  });
});
