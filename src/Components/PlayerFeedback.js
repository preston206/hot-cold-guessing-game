import React, { Component } from 'react';

import './PlayerFeedback.css';

export default class PlayerFeedback extends Component {
  render() {
    return (
      <div className="player-feedback">
        <p className="player-guess-count float-left">Guess #</p>
        <div className="guess-count-props">{this.props.guessCount}</div>
        <p className="player-guess-history float-left clear-left">History: </p>
        <div className="guess-history-props">{this.props.guessHistory}</div>
      </div>
    );
  }
};