import React from 'react';
import { shallow } from 'enzyme';
import ErrorBar from './ErrorBar';
import { testErrorMessage } from '../../utility/test-helpers';

const setup = () => {
  const component = shallow(<ErrorBar message={testErrorMessage} />);
  return component;
};

describe('Error Bar', () => {
  let component: any;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without crashing', () => {
    expect(component.length).toBe(1);
  });

  describe('render <h3>', () => {
    it('Should render an <h3>', () => {
      expect(component.find('h3')).toHaveLength(1);
    });

    it('Should render the h3 with message passed through props', () => {
      expect(component.find('h3').text()).toEqual(testErrorMessage);
    });
  });
});
