import React from 'react';
import { Button } from '@mui/material';
import './App.scss';

type State = {
  counter: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0 || this.state.counter === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="counter App__counter">
          <h1 className="counter__number">{this.state.counter}</h1>
          <div className="counter__button-container">
            <Button
              className="button"
              variant="contained"
              onClick={this.addOne}
            >
              add1
            </Button>
            <Button
              className="button"
              variant="contained"
              onClick={this.add100}
            >
              add100
            </Button>
            <Button
              className="button"
              variant="contained"
              onClick={this.increase}
            >
              increase
            </Button>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
