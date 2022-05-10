import React from 'react';
import './App.scss';

type State = {
  Count: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    Count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      Count: state.Count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      Count: state.Count + 100,
    }));
  };

  increase = () => {
    const { Count } = this.state;

    if (Count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { Count } = this.state;

    return (
      <div className="app">
        <div className="app__block">
          <h1 className="app__title">{`Count: ${Count}`}</h1>

          <button
            className="app__button"
            type="button"
            onClick={this.addOne}
          >
            Add One
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
