import React from 'react';
import './App.scss';

interface State {
  count: number,
}

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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          className="Button"
          type="button"
          onClick={this.addOne}
        >
          Add one
        </button>
        <button
          className="Button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="Button"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
        <button
          className="Button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
