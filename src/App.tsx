/* eslint-disable max-len */
import { Button, ButtonGroup, Card } from '@mui/material';
import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      count: currentState.count + 100,
    }));
  };

  // DON'T change the code below
  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <Card sx={{
        width: 'max-content',
        margin: '0 auto',
      }}
      >
        <div className="App">
          <h1 className="App__title">
            {`Count: ${count}`}
          </h1>

          <ButtonGroup variant="text" aria-label="text button group">
            <Button
              type="button"
              className="App__add-one"
              onClick={this.addOne}
            >
              Add 1
            </Button>
            <Button
              type="button"
              className="App__add-100"
              onClick={this.add100}
            >
              Add 100
            </Button>
            <Button
              type="button"
              className="App__increase"
              onClick={this.increase}
            >
              Increase
            </Button>
          </ButtonGroup>

        </div>
      </Card>
    );
  }
}
