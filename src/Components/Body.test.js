import React from 'react';
import {shallow, mount} from 'enzyme';

import Body from './Body';

describe('<Body />', () => {
    // smoke test
    it('Renders w/o crashing', () => {
        shallow(<Body />);
    });
});