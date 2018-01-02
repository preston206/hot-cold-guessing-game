import React from 'react';
import { shallow, mount } from 'enzyme';

import Form from './Form';

describe('<Form />', () => {
    // smoke test
    it('Renders w/o crashing', () => {
        shallow(<Form />);
    });

    it('Should call onSubmit', () => {
        const callback = jest.fn();
        const value = "33";
        const wrapper = mount(<Form play={callback} />);
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit', {
            preventDefault: () => console.log('fake event'),
        });
        expect(callback).toBeCalledWith(value);
    });
});