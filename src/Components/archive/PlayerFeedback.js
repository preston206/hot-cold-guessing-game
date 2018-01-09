import React from 'react';
import { connect } from 'react-redux';

import './PlayerFeedback.css';

export class PlayerFeedback extends React.Component {

  // function getGuessCount() {
  //   props.getState().count;
  // };

  // function getGuessHistory() {
  //   props.history.map((guess, index) => <span key={index}>{guess} </span>)
  // };
  render() {

    // let guesses = this.props.history.map((guess, index) =>
    //   <span key={index}>{guess} </span>
    // );

    // let guesses = this.props.history.map((guess) => guess);

    return (
      <div className="player-feedback" >
        <p className="player-guess-count float-left">Guess# </p>
        <div className="guess-count">{this.props.count}</div>
        <p className="player-guess-history float-left clear-left">History: </p>
        <div className="guess-history">{this.props.history}</div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  history: state.history,
  count: state.count
});

export default connect(mapStateToProps)(PlayerFeedback);