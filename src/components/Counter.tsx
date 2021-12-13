import React from 'react';
import './Counter.scss';
import Button from 'react-bootstrap/Button';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state:State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1 className="counter">
          Count:
          {' '}
          {this.state.counter}
        </h1>

        <div className="buttons">
          <Button
            variant="outline-success"
            onClick={() => {
              this.addOne();
            }}
          >
            Add one
          </Button>

          <Button
            variant="outline-success"
            onClick={() => {
              this.add100();
            }}
          >
            Add 100
          </Button>

          <Button
            variant="outline-success"
            onClick={() => {
              this.increase();
            }}
          >
            Increase
          </Button>
        </div>
      </>
    );
  }
}
