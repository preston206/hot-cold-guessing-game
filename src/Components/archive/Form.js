import React from 'react';
import { connect } from 'react-redux';

import { checkAnswer } from '../Actions';

import './Form.css';

export class Form extends React.Component {

  // getFeedback(answer) {
  //   let rn = this.props.randomNumber;
  //   let answerConvertedToNumber = Number(answer);

  //   if (answerConvertedToNumber === rn) {
  //     return "You Won!"
  //   }
  //   else if ((answerConvertedToNumber >= rn - 10) && (answerConvertedToNumber <= rn + 10)) {
  //     return "Hot"
  //   }
  //   else if (answerConvertedToNumber >= rn - 20 && answerConvertedToNumber < rn - 10) {
  //     return "Warm"
  //   }
  //   else if (answerConvertedToNumber <= rn + 20 && answerConvertedToNumber > rn + 10) {
  //     return "Warm"
  //   }
  //   else {
  //     return "Cold"
  //   }
  // };

  handleSubmit(event) {
    event.preventDefault(event);
    // this.props.guess(this.userInput.value);

    // let feedbackState = this.getFeedback(this.userInput.value);

    // compiling payload
    let payload = {
      history: this.userInput.value,
      guess: this.userInput.value
    };

    // dispatching payload
    this.props.dispatch(checkAnswer(payload));
  }


  // handleChange(event) {
  //   this.props.logInput(this.userInput.value);
  // }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label htmlFor="numberInput" className="form-label">Guess A Number</label>
        <br />
        <input
          type="number"
          id="numberInput"
          placeholder="pick a number 1 - 100"
          ref={val => this.userInput = val}
          min="1"
          max="100"
          autoFocus
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
};

const mapStateToProps = state => ({
  history: state.history,
  guess: state.guess
});

export default connect(mapStateToProps)(Form);