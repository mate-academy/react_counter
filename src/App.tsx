/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import './App.scss';

type Props = {};

type State = {
  count: number
};

class App extends React.Component<Props, State> {
  state = {
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

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App--title">
          Count:
          {' '}
          {count}
        </h1>

        <button
          className="App--button"
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>

        <button
          className="App--button"
          type="button"
          onClick={this.add100}
        >
          add100
        </button>

        <button
          className="App--button"
          type="button"
          onClick={this.increase}
        >
          addOne and sometimes add 100
        </button>
      </div>
    );
  }
}

export default App;
