import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state: State = {
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

  increase = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));

    if (this.state.count % 5 === 0
      && this.state.count > 0) {
      this.setState((state) => ({
        count: state.count + 100,
      }));
    }
  };

  clear = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>
        <div className="buttons">
          <button
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
          <button
            type="button"
            onClick={this.clear}
          >
            Clear
          </button>
        </div>
      </div>

    );
  }
}

export default App;
