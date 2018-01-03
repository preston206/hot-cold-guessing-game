import React from 'react';

import './NewGame.css';

export default function NewGame(props) {
  return (
    <div className="float-right new-game-container">
      <button id="new-game-btn" onClick={props.restart}>+ start a new game</button>
    </div>
  );
};