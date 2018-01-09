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

export const RESTART = 'RESTART';
export const restart = (randomNumber, history, feedback) => ({
    type: RESTART,
    randomNumber,
    history,
    feedback
});

export const INITIALIZE = 'INITIALIZE';
export const initialize = () => ({
    type: INITIALIZE
});