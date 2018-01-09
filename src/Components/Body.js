import React from 'react';
import { connect } from 'react-redux';
import { checkAnswer } from '../Actions';

import './Body.css';

export class Body extends React.Component {

  handleSubmit(event) {
    event.preventDefault(event);

    // compiling payload
    // **WARNING*** don't sent a single payload as obj- it will crash the app
    // let payload = {
    //   guess: this.userInput.value
    // };

    // console.log("checkAnswerPayload: ", payload);

    // dispatching payload
    this.props.dispatch(checkAnswer(this.userInput.value));
  };

  render() {
    return (
      <div className="body">
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
      </div>
    );
  }
};

const mapStateToProps = state => ({
  guess: state.guess
});

export default connect(mapStateToProps)(Body);