import React from 'react';
import './Counter.css';

export class Counter extends React.Component {
  state = {
    count: 1,
    color: '',
  }

  classes = ['blue', 'red', 'green']

  increase = () => {
    this.setState(state => ({
      color: this.classes[(state.count % 3)],
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          Counter:
          <span className={this.state.color}>{this.state.count}</span>
        </h1>
        <button type="button" onClick={this.increase}>plus</button>
      </>
    );
  }
}
