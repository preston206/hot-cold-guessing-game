import React from 'react';
import { connect } from 'react-redux';
// components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
// actions
import { restart, initialize } from '../Actions';
// css
import './App.css';


// start component
export class App extends React.Component {

  componentDidMount() {
    console.log("mounted");
    console.log(this.props);
    // initializing the state so a random number is generated
    this.props.dispatch(initialize());
  }

  restart() {
    // compiling payload
    let payload = {
      randomNumber: Math.floor(Math.random() * 100) + 1,
      count: 0,
      history: [],
      feedback: "let's play!"
    }

    // dispatching payload
    this.props.dispatch(restart(payload));

    document.getElementById('numberInput').focus();
  }

  render() {
    return (
      <div className="app">
        <Header restart={this.restart.bind(this)} />
        <Body />
        <Footer />
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  randomNumber: state.randomNumber,
  count: state.count,
  history: state.history,
  feedback: state.feedback
});

export default connect(mapStateToProps)(App);