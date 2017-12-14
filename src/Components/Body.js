import React, { Component } from 'react';

import Form from './Form';
import './Body.css';

// convert to function?

export default class BodyTop extends Component {
  render() {
    return (
      <div className="body">
        <Form play={this.props.play} />
      </div>
    );
  }
};