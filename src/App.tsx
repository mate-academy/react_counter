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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  clear = () => {
    this.setState(() => ({
      count: 0,
    }));
  };

  render() {
    return (
      <div>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          className="button"
          onClick={this.addOne}
        >
          addOne
        </button>

        <button
          type="button"
          className="button"
          onClick={this.add100}
        >
          add100
        </button>

        <button
          type="button"
          className="button"
          onClick={this.increase}
        >
          increase
        </button>

        <button
          type="button"
          className="button"
          onClick={this.clear}
        >
          clear
        </button>
      </div>
    );
  }
}

export default App;
