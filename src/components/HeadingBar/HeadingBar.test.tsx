import React from 'react';
import { shallow } from 'enzyme';
import { testFunc, testString } from '../../utility/test-helpers';
import HeadingBar from './HeadingBar';

const setup = () => {
  const component = shallow(
    <HeadingBar onButtonClick={testFunc} headingText={testString} />
  );
  return component;
};

describe('Heading Bar', () => {
  let component: any;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without crashing', () => {
    expect(component.length).toBe(1);
  });

  describe('HeadingBar button', () => {
    it('Should render a button', () => {
      expect(component.find('button')).toHaveLength(1);
    });

    it('Should render a button with proper message', () => {
      expect(component.find('button').text()).toEqual('Back to users');
    });
  });

  describe('HeadingBar h3', () => {
    it('Should render an h3', () => {
      expect(component.find('h3')).toHaveLength(1);
    });

    it('Should render h3 with text passed through props', () => {
      expect(component.find('h3').text()).toEqual(testString);
    });
  });
});
