import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => (
      {
        count: count + 1,
      }
    ));
  };

  add100 = () => {
    this.setState(({ count }) => (
      {
        count: count + 100,
      }
    ));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1 className="app__count">
          Count:
          {' '}
          {count}
        </h1>
        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={this.addOne}
          >
            add 1
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.add100}
          >
            add 100
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.increase}
          >
            add some
          </button>
        </div>
      </div>
    );
  }
}

export default App;
