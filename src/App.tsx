import React from 'react';
import './App.scss';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
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
      <Paper
        elevation={10}
        className="Paper"
      >
        <div className="App">
          <h1 className="App__title">
            {`Count: ${count}`}
          </h1>

          <Stack spacing={2} direction="row">

            <Button
              type="button"
              variant="contained"
              className="App__add-one"
              onClick={this.addOne}
            >
              Add 1
            </Button>

            <Button
              type="button"
              variant="contained"
              className="App__add-100"
              onClick={this.add100}
            >
              Add 100
            </Button>

            <Button
              type="button"
              variant="contained"
              className="App__increase"
              onClick={this.increase}
            >
              Increase
            </Button>
          </Stack>
        </div>
      </Paper>
    );
  }
}
