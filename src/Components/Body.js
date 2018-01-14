import React from 'react';
import { connect } from 'react-redux';
import { checkAnswer, updateTextField } from '../Actions';

import './Body.css';

export class Body extends React.Component {

  handleSubmit(event) {
    event.preventDefault(event);

    // compiling payload
    // **WARNING*** don't sent a single payload as obj- it will crash the app
    // let payload = {
    //   guess: this.userInput.value
    // };

    // dispatching payload
    let value = this.userInput.value;
    this.props.dispatch(checkAnswer(value));
  }

  handleChange(event) {
    this.props.dispatch(updateTextField(this.userInput.value));
  }

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
            value={this.props.inputValue}
            onChange={this.handleChange.bind(this)}
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
  guess: state.guess,
  inputValue: state.inputValue
});

export default connect(mapStateToProps)(Body);