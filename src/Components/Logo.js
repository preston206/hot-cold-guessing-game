import React from 'react';

import logo from '../Image/logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <div className="float-left">
      <img src={logo} className="logo" alt="React logo" title="Built with React" />
    </div>
  );
};