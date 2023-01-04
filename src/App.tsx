import React from 'react';
import './App.scss';
import {
  Button, ButtonGroup, Box, Card, CardContent,
  Typography, CardActions,
} from '@mui/material';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 100,
      };
    });
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
          width: 300,
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {`Count: ${count}`}
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonGroup
              variant="contained"
              size="small"
              color="success"
              aria-label="alignment button group"
            >
              <Button onClick={this.addOne}>Add 1</Button>
              <Button onClick={this.add100}>Add 100</Button>
              <Button onClick={this.increase}>Increase</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
    );
  }
}
