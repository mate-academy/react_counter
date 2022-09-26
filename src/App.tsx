import { Component } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import { Button, Heading, Box } from 'react-bulma-components';

type State = {
  count: number,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prev => ({
      count: prev.count + 100,
    }));
  };

  clear = () => {
    this.setState(() => ({
      count: 0,
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
      <Box className="App">
        <Heading className="App__title">
          {`Count: ${count}`}
        </Heading>

        <Button
          color="success"
          type="button"
          className="App__add-one button"
          onClick={this.addOne}
        >
          Add 1
        </Button>

        <Button
          color="success"
          type="button"
          className="App__add-100 button"
          onClick={this.add100}
        >
          Add 100
        </Button>

        <Button
          color="success"
          type="button"
          className="App__increase button"
          onClick={this.increase}
        >
          Increase
        </Button>

        <Button
          color="danger"
          type="button"
          className="App__increase button"
          onClick={this.clear}
        >
          Clear
        </Button>

      </Box>
    );
  }
}
