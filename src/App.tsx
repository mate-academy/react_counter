import React from 'react';
import './App.scss';

type State = {
  count: number,
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
    return (
      <div className="app">
        <div className="app__wrapper">
          <h1 className="app__title">{`Count: ${this.state.count}`}</h1>
          <div className="app__buttons">
            <button
              type="button"
              onClick={this.addOne}
              className="button"
            >
              +1
            </button>

            <button
              type="button"
              onClick={this.add100}
              className="button"
            >
              +100
            </button>

            <button
              type="button"
              onClick={this.increase}
              className="button"
            >
              +random
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
