import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
 import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={},state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
}
const findByTestAttr = (wrapper,val) => {
  return wrapper.find(`[data-testid="${val}"]`)
}

test('renders component without error', () => {
  const wrapper = setup();
  const appComponent =  findByTestAttr(wrapper,'component-app');
  expect(appComponent.length).toBe(1);
  
});
test('renders increment button', () => {
  const wrapper = setup();
  const incButton =  findByTestAttr(wrapper,'increment-button');
  expect(incButton.length).toBe(1);
  
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay =  findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1);
  
});

test('counter starts at 0', () => {
   const wrapper = setup();
   const initialCounter =  wrapper.state('counter')
   expect(initialCounter).toBe(0);
  
});
test('counter needs to incremnet by clicking on increment button', () => {
  const counter = 7;
  const wrapper = setup(null, {counter});

  const findButton = findByTestAttr(wrapper,'increment-button');
  findButton.simulate('click');

  const counterDisplay =  findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('renders decrement button', ()=>{
  const wrapper =  setup();
  const decrementButton = findByTestAttr(wrapper,'decrement-button');
  expect(decrementButton.length).toBe(1);
});

test('renders validation messgae if counter is lessthan zero', ()=>{
  const counter = -1;
  const wrapper =  setup(null,{counter});

  const decrementButton = findByTestAttr(wrapper,'decrement-button');
  decrementButton.simulate('click');

  const errMsg = findByTestAttr(wrapper,'error-message');
  expect(errMsg.length).toBe(1);
});
// test('renders component without error', () => {
//   const { getByTestId } = render(<App />);
//   const appComponent = getByTestId('component-app');
//   expect(appComponent).toBeInTheDocument();
// });