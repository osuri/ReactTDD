import React from 'react';
import{ shallow } from 'enzyme';
import { findByTestAttr,checkProps } from '../test/testUtils';
import GuessedWords from './guessedWords';

const defaultProps = {
    guessedWords:[{guessWord:'train',letterMatchCount:0}]
}

const setup = (props={})=>{
    const setupProps = {...defaultProps,...props}
    return shallow(<GuessedWords {...setupProps} />);
}


test('not throw warning with expected props', ()=>{
    checkProps(GuessedWords,defaultProps);
})
describe('if no words are guessed', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({ guessedWords : []})
    });
    test('render component without error',()=>{
        const guessWordComponent = findByTestAttr(wrapper,"component-guessword");
        expect(guessWordComponent.length).toBe(1);
    });
    test('render instructions to guess word',()=>{
        const guessWordInstructions = findByTestAttr(wrapper,"guessword-instructions");
        expect(guessWordInstructions.length).not.toBe(0);
    });

})
describe('if words are gussed', ()=>{

})