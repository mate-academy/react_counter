import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  countAdder = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <h1>
        <button className="button" onClick={this.countAdder} />
        <h2 className="count">{this.state.counter}</h2>
      </h1>
    );
  }
}

export default App;
