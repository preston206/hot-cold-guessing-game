import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.userInput.value);
    this.props.play(this.userInput.value);
  }

  handleChange(event) {
    this.props.updateInput(this.userInput.value);
  }

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
          value={this.props.input}
          onChange={event => this.handleChange(event)}
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