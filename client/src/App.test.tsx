import React from 'react';
import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import Enzyme, {shallow, mount } from 'enzyme';
import {MemoryRouter, Switch} from 'react-router-dom';

import App from './App';

Enzyme.configure({adapter: new Adapter()})

test('renders App', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('div').length).toEqual(2);
});
