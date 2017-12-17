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
      count: null,
      history: [],
      feedback: "let's play!",
      input: ''
    };
  }

  updateInput(input) {
    this.setState({
      input
    });
  }

  checkAnswer(answer) {

    let r = this.state.randomNumber;

    if (answer == r) {
      this.setState({
        feedback: "You Won!"
      });
    }
    else if ((answer >= r - 10) && (answer <= r + 10)) {
      this.setState({
        feedback: "Hot"
      });
    }
    else if (answer >= r - 20 && answer < r - 10) {
      this.setState({
        feedback: "Warm"
      });
    }
    else if (answer <= r + 20 && answer > r + 10) {
      this.setState({
        feedback: "Warm"
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
      history: [...this.state.history, playerInput],
      input: playerInput
    });

    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    });

    if (playerInput) {
      this.checkAnswer(playerInput)
    };

    console.log("the state is:", this.state);
  }

  restart() {
    this.setState({
      randomNumber: Math.floor(Math.random() * 100) + 1,
      count: null,
      history: [],
      feedback: "let's play!",
      input: ''
    });
    document.getElementById('numberInput').focus();
  }

  render() {
    let guesses = this.state.history.map((guess, index) =>
      <span key={index}>{guess} </span>
    );

    return (
      <div className="app">
        <Header feedback={this.state.feedback} restart={this.restart.bind(this)} />
        <Body play={this.play.bind(this)} input={this.state.input} updateInput={this.updateInput.bind(this)} />
        <Footer guessHistory={guesses} guessCount={this.state.count} />
      </div>
    );
  }
};