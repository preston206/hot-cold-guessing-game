import React from 'react';

import Form from './Form';

import './Body.css';

export default function BodyTop(props) {
  return (
    <div className="body">
      <Form play={props.play} input={props.input} updateInput={props.updateInput} />
    </div>
  );
};