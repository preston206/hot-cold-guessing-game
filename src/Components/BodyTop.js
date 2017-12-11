import React, { Component } from 'react';

import Form from './Form';
import './BodyTop.css';

// convert to function?

export default class BodyTop extends Component {
  render() {
    return (
      <div className="body-top-container">
        <Form />
      </div>
    );
  }
};