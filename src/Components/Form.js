import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {
  checkNumber(event) {
    event.preventDefault();
    console.log(this.input.value);
  }

  render() {
    return (
      <form onSubmit={number => this.checkNumber(number)}>
        <label htmlFor="numberInput" className="form-label">Guess A Number</label>
        <br />
        <input type="number" id="numberInput" placeholder="..." ref={val => this.input = val} required />
        <button type="submit">Submit</button>
      </form>
    );
  }
};