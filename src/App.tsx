import React from 'react';
import './App.scss';
import { State } from './State';

class App extends React.Component {
  state = {
    sum: 0,
  };

  addOne = () => {
    this.setState((state: State) => ({
      sum: state.sum + 1,
    }));
  };

  add100 = () => {
    this.setState((state: State) => ({
      sum: state.sum + 100,
    }));
  };

  increase = () => {
    if (this.state.sum % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {`Count: ${this.state.sum}`}
        </h1>

        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.addOne}
          >
            +1
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.add100}
          >
            +100
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
