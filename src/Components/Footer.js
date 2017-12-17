import React from 'react';

import PlayerFeedback from './PlayerFeedback';

import './Footer.css';

export default function Footer(props) {
  return (
    <div className="footer">
      <PlayerFeedback guessHistory={props.guessHistory} guessCount={props.guessCount} />
    </div>
  );
};