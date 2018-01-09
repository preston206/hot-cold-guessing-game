import { CHECK_ANSWER, RESTART, INITIALIZE } from '../Actions';

const initialState = {
    randomNumber: Math.floor(Math.random() * 100),
    count: 0,
    history: [],
    feedback: "let's play!",
    guess: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CHECK_ANSWER:

            console.log("checkAnswerReducer: ", action);
            let feedback;
            let rn = state.randomNumber;
            let answerConvertedToNumber = Number(action.guess);

            if (answerConvertedToNumber === rn) {
                feedback = "You Won!"
            }
            else if ((answerConvertedToNumber >= rn - 10) && (answerConvertedToNumber <= rn + 10)) {
                feedback = "Hot"
            }
            else if (answerConvertedToNumber >= rn - 20 && answerConvertedToNumber < rn - 10) {
                feedback = "Warm"
            }
            else if (answerConvertedToNumber <= rn + 20 && answerConvertedToNumber > rn + 10) {
                feedback = "Warm"
            }
            else {
                feedback = "Cold"
            }

            return Object.assign({}, state, {
                count: state.count + 1,
                history: [...state.history, action.guess],
                feedback,
                guess: action.guess
            });

        case RESTART:
            return Object.assign({}, state, {
                randomNumber: action.randomNumber,
                count: action.count,
                history: action.history,
                feedback: action.feedback
            });

        case INITIALIZE:
            return Object.assign({}, state, {
                randomNumber: state.randomNumber,
                count: state.count,
                history: state.history,
                feedback: state.feedback
            });

        default:
            return state;
    }
};