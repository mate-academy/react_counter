import React from 'react';
import './Counter.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>
          Count:
          {count}
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
