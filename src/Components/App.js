import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import './App.css';

// exporting...
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: Math.floor(Math.random() * 100),
      count: 0,
      history: [],
      feedback: "let's play!"
    };
  }

  checkAnswer(answer) {

    let r = this.state.randomNumber;

    if (answer == r) {
      this.setState({
        feedback: "You Won!"
      });
    }
    else if ((answer >= r-10) && (answer <= r+10)) {
      this.setState({
        feedback: "Hot"
      });
    }
    else {
      this.setState({
        feedback: "Cold"
      });
    }

  }

  play(playerInput) {

    this.setState({
      history: [...this.state.history, playerInput]
    });

    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    });

    if (playerInput) {
      this.checkAnswer(playerInput)
    };

    console.log("the state is:", this.state);
  }

  render() {
    let guesses = this.state.history.map((guess, index) =>
      <span key={index}>{guess} </span>
    );

    return (
      <div className="App">
        <Header feedback={this.state.feedback} />
        <Body play={this.play.bind(this)} />
        <Footer guessHistory={guesses} guessCount={this.state.count} />
      </div>
    );
  }
};