import React from 'react';
import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import Enzyme, {shallow, mount} from 'enzyme';

import App from './App';


Enzyme.configure({adapter: new Adapter()})

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText("Image Mrkt");
  expect(linkElement).toBeInTheDocument();
});

it('shallow testing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').length).toEqual(1);
})
