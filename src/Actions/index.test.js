import {
    checkAnswer, CHECK_ANSWER,
    initialize, INITIALIZE,
    restart, RESTART,
    updateTextField, UPDATE_TEXT_FIELD
} from '../Actions';

describe('checkAnswer', () => {
    it('Should return the action', () => {
        const guess = 42;
        const action = checkAnswer(guess);
        expect(action.type).toEqual(CHECK_ANSWER);
        expect(action.guess).toEqual(guess);
    });
});

describe('updateTextField', () => {
    it('Should return the action', () => {
        const inputValue = 42;
        const action = updateTextField(inputValue);
        expect(action.type).toEqual(UPDATE_TEXT_FIELD);
        expect(action.inputValue).toEqual(inputValue);
    });
});

describe('initialize', () => {
    it('Should return the action', () => {
        const action = initialize();
        expect(action.type).toEqual(INITIALIZE);
    });
});

describe('restart', () => {
    it('Should return the action', () => {
        const action = restart();
        expect(action.type).toEqual(RESTART);
    });
});