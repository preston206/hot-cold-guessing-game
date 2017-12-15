import React from 'react';

import './NewGame.css';

export default function NewGame(props) {
  return (
    <div className="float-right new-game-container">
      <a href="#" onClick={props.restart}>+ start a new game</a>
    </div>
  );
};