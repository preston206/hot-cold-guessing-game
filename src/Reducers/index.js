import { CHECK_ANSWER, RESTART, INITIALIZE, UPDATE_TEXT_FIELD } from '../Actions';

const initialState = {
    randomNumber: Math.floor(Math.random() * 100),
    count: 0,
    history: [],
    feedback: "let's play!",
    guess: '',
    inputValue: ''
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
                randomNumber: Math.floor(Math.random() * 100),
                count: initialState.count,
                history: initialState.history,
                feedback: initialState.feedback,
                inputValue: initialState.inputValue
            });

        case INITIALIZE:
            return Object.assign({}, state, {
                randomNumber: initialState.randomNumber,
                count: initialState.count,
                history: initialState.history,
                feedback: initialState.feedback,
                inputValue: initialState.inputValue
            });

        case UPDATE_TEXT_FIELD:
            return Object.assign({}, state, {
                inputValue: action.inputValue
            });

        default:
            return state;
    }
};