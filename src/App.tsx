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
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          {`Count: ${this.state.count}`}
        </h1>
        <div className="app__button-block">
          <button
            type="button"
            className="app__button"
            onClick={this.addOne}
          >
            addOne
          </button>

          <button
            type="button"
            className="app__button"
            onClick={this.add100}
          >
            add100
          </button>

          <button
            type="button"
            className="app__button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
