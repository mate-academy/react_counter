import React from 'react';
import './App.scss';
import {
  Box,
  Card,
  CardContent,
  Button,
  ButtonGroup,
} from '@mui/material';

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

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card sx={{
          width: 350,
          color: 'black',
          textAlign: 'center',
          backgroundColor: 'lightgray',
        }}
        >
          <CardContent>
            <h1 className="App__title">
              {`Count: ${count}`}
            </h1>

            <ButtonGroup variant="contained">
              <Button onClick={this.addOne}>Add 1</Button>
              <Button onClick={this.add100}>Add 100</Button>
              <Button onClick={this.increase}>Increase</Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Box>
    );
  }
}
