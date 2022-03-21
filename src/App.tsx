import React from 'react';
import './App.scss';

type Props = {};

type State = {
  count: number,
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
    return (
      <div className="App">
        <h1 className="App__title">
          Count:
          {' '}
          <span className="App__title--count">
            {this.state.count}
          </span>
        </h1>

        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="App__button"
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
