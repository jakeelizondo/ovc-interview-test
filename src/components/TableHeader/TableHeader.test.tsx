import React from 'react';
import { shallow } from 'enzyme';
import { testFunc } from '../../utility/test-helpers';
import TableHeader from './TableHeader';

const testCols = ['1', '2', '3'];

const setup = () => {
  const component = shallow(<TableHeader cols={testCols} />);
  return component;
};

let container: any;

describe('Table Header', () => {
  let component: any;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without crashing', () => {
    expect(component.length).toBe(1);
  });

  describe('Table Head', () => {
    it('should render a table head', () => {
      container = component.find('thead');
      expect(container).toHaveLength(1);
    });
  });

  describe('Table Head Row', () => {
    it('should render rows', () => {
      container = component.find('tr');
      expect(container).toHaveLength(1);
    });

    it('Should render rows with text from props', () => {
      container = component.find('tr');
      expect(container.text()).toEqual(testCols.join(''));
    });
  });
});
