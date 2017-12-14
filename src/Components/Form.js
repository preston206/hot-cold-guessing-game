import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {
  sendToParent(event) {
    event.preventDefault();
    console.log(this.input.value);
    this.props.play(this.input.value);
  }

  render() {
    return (
      <form onSubmit={event => this.sendToParent(event)}>
        <label htmlFor="numberInput" className="form-label">Guess A Number</label>
        <br />
        <input
          type="number"
          id="numberInput"
          placeholder="pick a number 1 - 100"
          ref={val => this.input = val}
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