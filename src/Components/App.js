import React, { Component } from 'react';

import Header from './Header';
import BodyTop from './BodyTop'
import BodyBottom from './BodyBottom';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BodyTop />
        <BodyBottom />
      </div>
    );
  }
};