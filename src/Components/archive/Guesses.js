import React from 'react';
import { connect } from 'react-redux';

export function Guesses(props) {

  let guesses = props.history.map((guess, index) =>
    <span key={index}>{guess} </span>
  );

  return (
    <div>{guesses}</div>
  );
};

const mapStateToProps = state => ({
  history: state.history
});

export default connect(mapStateToProps)(Guesses);