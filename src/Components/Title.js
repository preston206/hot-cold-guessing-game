import React from 'react';

import logo from '../Image/logo.svg';
import './Title.css';

export default function Title() {
  return (
    <div>
      <h1 className="title">Hot or Cold Guessing Game</h1>
      <h2 className="subtitle">Built with React</h2>
      <img src={logo} className="logo" alt="React logo" title="React logo" />
    </div>
  );
};