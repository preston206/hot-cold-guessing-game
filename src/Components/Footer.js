import React from 'react';
import { connect } from 'react-redux';

import './Footer.css';

export class Footer extends React.Component {
  render() {

    let guesses = this.props.history.map((guess, index) =>
      <span key={index}>{guess} </span>
    );

    return (
      <div className="footer">
        <div className="player-feedback" >
          <p className="player-guess-count float-left">Guess# </p>
          <div className="guess-count">{this.props.count}</div>
          <p className="player-guess-history float-left clear-left">History: </p>
          <div className="guess-history">{guesses}</div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  history: state.history,
  count: state.count
});

export default connect(mapStateToProps)(Footer);