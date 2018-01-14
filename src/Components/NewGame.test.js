import React from 'react';
import { shallow } from 'enzyme';

import { restart } from '../Actions';
import { NewGame } from './NewGame';
import { disconnect } from 'cluster';

describe('<NewGame />', () => {
    it('Should restart the game', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<NewGame dispatch={dispatch} />);
        wrapper.find('button').simulate('click');
        // wrapper.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(restart());
    });
});