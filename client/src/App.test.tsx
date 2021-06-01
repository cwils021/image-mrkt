// import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, {shallow } from 'enzyme';

import App from './App';

Enzyme.configure({adapter: new Adapter()})

test('renders App', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('div').length).toEqual(1);
});
