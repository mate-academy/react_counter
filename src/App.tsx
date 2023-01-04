import React from 'react';
import './App.scss';
import { Paper, Button, ButtonGroup } from '@mui/material';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

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
        <Paper
          className="App__paper"
          elevation={20}
          sx={{
            padding: '50px 80px',
            width: 'max-content',
            margin: '0 auto',
            borderRadius: '10px',
          }}
        >
          <h1 className="App__title">
            {`Count: ${count}`}
          </h1>

          <ButtonGroup
            variant="contained"
            color="secondary"
            size="large"
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
              variant="outlined"
              type="button"
              className="App__increase"
              onClick={this.increase}
            >
              Increase
            </Button>
          </ButtonGroup>
        </Paper>
      </div>
    );
  }
}
