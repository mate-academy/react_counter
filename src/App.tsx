import React from 'react';
import './App.scss';

type Props = {};

type State = {
  count: number
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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1 className="container__title">
          Count:
          {' '}
          {count}
        </h1>
        <br />
        <div className="container__items">
          <button
            type="button"
            onClick={this.addOne}
            className="button button__one"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button button__100"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button button__increase"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
