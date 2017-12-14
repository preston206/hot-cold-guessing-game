import React, { Component } from 'react';

import PlayerFeedback from './PlayerFeedback';
// import NewGame from './NewGame';
import './Footer.css';

// convert to function?

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <PlayerFeedback guessHistory={this.props.guessHistory} guessCount={this.props.guessCount}/>
      </div>
    );
  }
};