import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
} from '@mui/material';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
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
      <Container
        maxWidth="sm"
      >
        <Box
          sx={{
            border: 3,
            borderColor: 'success.main',
            borderRadius: 25,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <div className="App">
            <h1 className="App__title">
              <Typography
                variant="h4"
                align="center"
                color="success.main"
              >
                {`Count: ${count}`}
              </Typography>
            </h1>

            <ButtonGroup
              variant="outlined"
              color="success"
            >
              <Button>
                <button
                  type="button"
                  className="App__add-one"
                  onClick={this.addOne}
                >
                  <Typography
                    color="success.main"
                  >
                    Add 1
                  </Typography>
                </button>
              </Button>

              <Button>
                <button
                  type="button"
                  className="App__add-100"
                  onClick={this.add100}
                >
                  <Typography
                    color="success.main"
                  >
                    Add 100
                  </Typography>
                </button>
              </Button>

              <Button>
                <button
                  type="button"
                  className="App__increase"
                  onClick={this.increase}
                >
                  <Typography
                    color="success.main"
                  >
                    Increase
                  </Typography>
                </button>
              </Button>
            </ButtonGroup>
          </div>
        </Box>
      </Container>
    );
  }
}
