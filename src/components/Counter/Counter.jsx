import React from 'react';
import './Counter.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>
          Count:
          {counter}
        </h1>
        <Button
          className="btn"
          onClick={this.addOne}
        >
          AddOne
        </Button>
        <Button
          className="btn"
          onClick={this.add100}
        >
          Add100
        </Button>
        <Button
          className="btn"
          onClick={this.increase}
        >
          Increase
        </Button>
      </div>
    );
  }
}

export default Counter;
