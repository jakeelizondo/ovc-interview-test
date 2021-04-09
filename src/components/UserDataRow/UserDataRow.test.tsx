import React from 'react';
import { shallow } from 'enzyme';
import { testFunc, testUserConcise } from '../../utility/test-helpers';
import UserDataRow from './UserDataRow';

let container: any;

const setup = () => {
  const component = shallow(
    <UserDataRow user={testUserConcise} onRowClick={testFunc} />
  );
  return component;
};

describe('User Data Row', () => {
  let component: any;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without crashing', () => {
    expect(component.length).toBe(1);
  });

  describe('User Data Row <tr>', () => {
    it('should render one <tr>', () => {
      container = component.find('tr');
      expect(container.length).toBe(1);
    });

    it('should trigger an event on click', () => {
      const mockCallBack = jest.fn();
      const testRow = shallow(
        <UserDataRow user={testUserConcise} onRowClick={mockCallBack} />
      );
      testRow.find('tr').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

  describe('User Data Row <td>', () => {
    //extract relevant fields off of user, which will be used for actual cells
    const { name, email, company, city } = testUserConcise;
    const userRowData = [name, email, city, company];
    it('should render cells equal to target fields on user object passed in', () => {
      container = component.find('td');

      expect(container.length).toBe(Object.keys(userRowData).length);
    });

    it('should render a cell with each field of data passed in', () => {
      container = component.find('tr');
      expect(container.text()).toEqual(userRowData.join(''));
    });
  });
});
