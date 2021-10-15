import React from 'react';
import './App.scss';

interface State {
  counter: number;
}

type Props = {};

class App extends React.Component<Props, State> {
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
    if (this.state.counter !== 0 && this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>
          Count:
          {' '}
        </h1>

        <h1 className="App__result">{counter}</h1>

        <div className="App__buttons">
          <button
            className="button"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            className="button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            className="button"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>

          <button
            className="button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
