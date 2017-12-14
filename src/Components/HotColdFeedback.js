import React from 'react';

import './HotColdFeedback.css';

export default function HotColdFeedback(props) {
  return (
    <div id="hot-cold-feedback">{props.feedback}</div>
  );
};