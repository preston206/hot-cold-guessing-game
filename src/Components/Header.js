import React from 'react';

import Logo from './Logo';
import NewGame from './NewGame';
import Title from './Title';
import HotColdFeedback from './HotColdFeedback';
import './Header.css';

export default function Header(props) {
  return (
    <div>
      <div className="top-row-header">
        <Logo />
        <NewGame restart={props.restart} />
      </div>
      <header className="header">
        <Title />
        <HotColdFeedback feedback={props.feedback} />
      </header>
    </div>
  );
};