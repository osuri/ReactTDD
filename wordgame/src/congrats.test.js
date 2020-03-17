import React from 'react';
import{ shallow } from 'enzyme';


import Congrats from './congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';



const defaultProps = {success:false};
const setup = (props={})=>{
    const setupProps = {...defaultProps,...props}
    return shallow(<Congrats {...setupProps} />);
}
test('should render component without errors', () => {
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper,'component-congrats');
    expect(congratsComponent.length).toBe(1);
})

test('should not render congrats message if success props is false', () => {
    const wrapper = setup({success:false});
    const message = wrapper.find('[data-test="success-msg"]');
    expect(message.length).toBe(0);
})

test('should  render congrats message if success props is true', () => {
    const wrapper = setup({success:true});
    const message = wrapper.find('[data-test="success-msg"]');
    expect(message.text()).not.toBe(0);
})

test('do not show error if success prop is available', () => {
    const expectedProps = {success:false};
    checkProps(Congrats,expectedProps);
})
