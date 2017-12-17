import React from 'react';

import './PlayerFeedback.css';

export default function PlayerFeedback(props) {
  return (
    <div className="player-feedback">
      <p className="player-guess-count float-left">Guess# </p>
      <div className="guess-count-props">{props.guessCount}</div>
      <p className="player-guess-history float-left clear-left">History: </p>
      <div className="guess-history-props">{props.guessHistory}</div>
    </div>
  );
};