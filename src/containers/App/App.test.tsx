import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import App from './App';

const setup = () => {
  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return component;
};

describe('App', () => {
  it('Should render without crashing', () => {
    expect(setup().length).toBe(1);
  });
});
