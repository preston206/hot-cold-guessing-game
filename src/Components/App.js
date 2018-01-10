import React from 'react';
import { connect } from 'react-redux';
// components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
// actions
import { initialize } from '../Actions';
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

  render() {
    return (
      <div className="app">
        <Header />
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