import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ counter: state.counter + 100 }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Count:
          {' '}
          {counter}
        </h1>
        <div className="App__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="button"
          >
            add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button"
          >
            add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button"
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
