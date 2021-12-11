import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
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
      <>
        <div className="app">
          <div className="counter">
            <h1 className="counter__result">
              Count:
              {' '}
              {count}
            </h1>
            <div className="counter__buttons">
              <button
                type="button"
                onClick={this.addOne}
                className="counter__button"
              >
                Add 1
              </button>
              <button
                type="button"
                onClick={this.add100}
                className="counter__button"
              >
                Add 100
              </button>
              <button
                type="button"
                onClick={this.increase}
                className="counter__button"
              >
                Increase
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
