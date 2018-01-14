import React from 'react';
import { shallow, mount } from 'enzyme';

import { Body } from './Body';
import { checkAnswer, updateTextField } from '../Actions';

describe('<Body />', () => {

    // smoke test
    it('Should render without crashing', () => {
        shallow(<Body />);
    });

    // dispatch test for checkAnswer action
    it('Should dispatch checkAnswer on submit', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Body dispatch={dispatch} />);
        const value = "42";
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.find('form').simulate('submit');
        // console.log(checkAnswer(value));
        expect(dispatch).toHaveBeenCalledWith(checkAnswer(value));
    });

    // dispatch test for updateTextField action
    it('Should dispatch updateTextField on text input change', () => {
        const dispatch = jest.fn();
        const value = "42";
        const wrapper = mount(<Body dispatch={dispatch} />);
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.find('input').simulate('change');
        expect(dispatch).toHaveBeenCalledWith(updateTextField(value));
    });
});