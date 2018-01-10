//   this.state = {
//     randomNumber: Math.floor(Math.random() * 100),
//     count: null,
//     history: [],
//     feedback: "let's play!",
//     guess: ''
//   };

export const CHECK_ANSWER = 'CHECK_ANSWER';
export const checkAnswer = guess => ({
    type: CHECK_ANSWER,
    guess
});

export const INITIALIZE = 'INITIALIZE';
export const initialize = () => ({
    type: INITIALIZE
});

export const RESTART = 'RESTART';
export const restart = () => ({
    type: RESTART
});

export const UPDATE_TEXT_FIELD = 'UPDATE_TEXT_FIELD';
export const updateTextField = inputValue => ({
    type: UPDATE_TEXT_FIELD,
    inputValue
});