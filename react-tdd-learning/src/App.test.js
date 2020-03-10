import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders component without error', () => {
  const wrapper = shallow(<App />);
  const appComponent =  wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
  
});