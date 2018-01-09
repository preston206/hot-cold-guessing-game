import React from 'react';
import { connect } from 'react-redux';

import './HotColdFeedback.css';

export function HotColdFeedback(props) {
  return (
    <div id="hot-cold-feedback">{props.feedback}</div>
  );
};

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(HotColdFeedback);