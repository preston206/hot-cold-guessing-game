import React, { Component } from 'react';

import PlayerFeedback from './PlayerFeedback';
import NewGame from './NewGame';
import './BodyBottom.css';

// convert to function?

export default class BodyBottom extends Component {
  render() {
    return (
      <div className="body-bottom-container">
        <PlayerFeedback />
        <NewGame />
      </div>
    );
  }
};