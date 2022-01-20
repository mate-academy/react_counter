import React from 'react';

import './App.scss';

type Props = {};

type State = {
  count: number;
};

class App extends React.Component<Props, State> {
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
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <br />
        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <br />
        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <br />
        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
