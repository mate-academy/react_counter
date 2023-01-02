import React from 'react';
import './App.scss';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

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
      <div className="App">
        <Paper elevation={3} className="App_paper">
          <h1 className="App__title">
            {`Count: ${count}`}
          </h1>
          <div className="App__add-group">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
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
        </Paper>
      </div>
    );
  }
}
