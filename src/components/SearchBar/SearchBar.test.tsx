import React from 'react';
import { shallow } from 'enzyme';
import { testFunc } from '../../utility/test-helpers';
import SearchBar from './SearchBar';

const setup = (isFiltering: boolean) => {
  const component = shallow(
    <SearchBar
      onFilter={testFunc}
      onReset={testFunc}
      isFiltering={isFiltering}
    />
  );
  return component;
};

let container, containerProps: any;

describe('Search Bar', () => {
  let component: any;

  describe('NOT FILTERING', () => {
    beforeEach(() => {
      component = setup(false);
    });

    it('Should render without crashing', () => {
      expect(component.length).toBe(1);
    });

    describe('SearchBar Label', () => {
      it('Should render label', () => {
        expect(
          component.containsMatchingElement(<label>Search By Name:</label>)
        ).toBeTruthy();
      });
    });

    describe('SearchBar input', () => {
      it('Should render input', () => {
        expect(component.containsMatchingElement(<input />)).toBeTruthy();
      });
    });

    describe('SearchBar Search Button', () => {
      beforeEach(() => {
        container = component.find('#search-button');
        containerProps = container.props();
      });

      it('Should render with search button', () => {
        expect(
          component.containsMatchingElement(<button>Search</button>)
        ).toBeTruthy();
      });

      it('Should render with search button disabled', () => {
        expect(containerProps.disabled).toEqual(true);
      });

      it('should trigger an event on search button click', () => {
        const mockCallBack = jest.fn();
        const testRow = shallow(
          <SearchBar
            onFilter={mockCallBack}
            onReset={testFunc}
            isFiltering={false}
          />
        );
        testRow.find('#search-button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
      });
    });
  });

  describe('FILTERING', () => {
    beforeEach(() => {
      component = setup(true);
    });
    describe('SearchBar Reset Button', () => {
      it('Should render with reset button', () => {
        expect(
          component.containsMatchingElement(<button>Reset</button>)
        ).toBeTruthy();
      });

      it('should trigger an event on search button click', () => {
        const mockCallBack = jest.fn();
        const testRow = shallow(
          <SearchBar
            onFilter={testFunc}
            onReset={mockCallBack}
            isFiltering={true}
          />
        );
        testRow.find('#search-reset').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
      });
    });
  });
});
