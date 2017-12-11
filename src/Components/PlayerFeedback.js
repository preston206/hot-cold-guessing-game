import React, { Component } from 'react';

import './PlayerFeedback.css';

export default class PlayerFeedback extends Component {
  render() {
    return (
      <div className="player-feedback">
        <div>
          <p className="player-guess-count float-left">Guess #</p>
        </div>
        <div>
          <p className="player-guess-history float-left clear-left">History: </p>
        </div>
      </div>
    );
  }
};