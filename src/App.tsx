import React from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState(currentCount => ({
      count: currentCount.count + 1,
    }));
  };

  add100 = () => {
    this.setState(currentCount => ({
      count: currentCount.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="main">
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: 310,
              height: 220,
            },
            justifyContent: 'center',
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              backgroundColor: 'text.disabled',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="App">
              <h1 className="App__title">
                {`Count: ${count}`}
              </h1>

              <div className="App__buttons">
                <Button
                  color="info"
                  variant="outlined"
                  size="medium"
                  type="button"
                  className="App__add-one"
                  onClick={this.addOne}
                >
                  Add 1
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  type="button"
                  className="App__add-100"
                  onClick={this.add100}
                >
                  Add 100
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  type="button"
                  className="App__increase"
                  onClick={this.increase}
                >
                  Increase
                </Button>

              </div>

            </div>
          </Paper>
        </Box>
      </div>
    );
  }
}
