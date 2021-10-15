import './App.css';
import React from 'react';
import ButtonPanel from './ButtonPanel.js';
import calculate from '../logic/calculator.js';
import Display from './Display.js';

export default class App extends React.Component {

  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    console.log(this.state);
    console.log({ buttonName: buttonName });
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (<div className="Component-app">
      <Display value={this.state.next || this.state.total || "0"} />
      <ButtonPanel clickHandler={this.handleClick} />
    </div>);
  }
}