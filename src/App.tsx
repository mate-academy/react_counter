import React from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AddIcon from '@mui/icons-material/Add';

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

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Count: ${count}`}
        </h1>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            type="button"
            className="App__add-one"
            onClick={this.addOne}
          >
            1
          </Button>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            type="button"
            className="App__add-100"
            onClick={this.add100}
          >
            100
          </Button>

          <Button
            variant="contained"
            type="button"
            className="App__increase"
            onClick={this.increase}
          >
            Increase
          </Button>
        </Stack>

        <Button
          variant="contained"
          color="error"
          endIcon={<RotateLeftIcon />}
          type="button"
          className="App__reset"
          onClick={this.reset}
        >
          Reset
        </Button>
      </div>
    );
  }
}
