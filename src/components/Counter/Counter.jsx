import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import './counter.scss';

export class Counter extends React.Component {
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
    if (this.state.counter % 5 !== 0) {
      this.addOne();
    } else {
      this.addOne();
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__heading">
          {`Count: ${counter}`}
        </h1>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button onClick={this.addOne}>Add One</Button>
          <Button onClick={this.add100}>Add Hundred</Button>
          <Button onClick={this.increase}>Increase</Button>
        </ButtonGroup>
      </div>
    );
  }
}
