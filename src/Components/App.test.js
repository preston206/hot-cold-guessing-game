import React from 'react';
import { shallow } from 'enzyme';

// NOTE about testing:
// if there is an error about not finding the store
// then import the named export- not the default export
import { App } from './App';
// import { initialize } from '../Actions';

describe('<App />', () => {
    // smoke test
    // it('Should render without crashing', () => {
    //     const dispatch = jest.fn();
    //     mount(<App dispatch={dispatch} />);
    //     expect(dispatch).toHaveBeenCalledWith(initialize());
    // });

    it('Should render without crashing', () => {
        const dispatch = jest.fn();
        // when this test is ran, it looks for a fn specifically named 'dispatch'
        // if I rename this to dispatch123={} it will fail
        // but if I also rename the fn in App to dispatch123 then it will pass
        shallow(<App dispatch={dispatch} />);
    });

    // it('Should dispatch initialize on mount', () => {
    //     const dispatch = jest.fn();
    //     const spy = jest.spyOn(App.prototype, 'dispatch');
    //     const wrapper = mount(<App />);
    //     expect(dispatch).toHaveBeenCalledWith(initialize());
    // });
});