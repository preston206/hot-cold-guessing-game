import React from 'react';
import { connect } from 'react-redux';
import { restart } from '../Actions';

import './NewGame.css';

export function NewGame(props) {
  return (
    <div className="float-right new-game-container">
      <button id="new-game-btn" onClick={event => props.dispatch(restart())}>
        + start a new game
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  randomNumber: state.randomNumber,
  count: state.count,
  history: state.history,
  feedback: state.feedback
});

export default connect(mapStateToProps)(NewGame);