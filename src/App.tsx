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
    this.setState((state) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.setState((state) => {
      if (state.count % 5 === 0) {
        return ({ count: state.count + 100 });
      }

      return ({ count: state.count + 1 });
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {`Count: ${count}`}
        </h1>

        <div className="app__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="app__button"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="app__button"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="app__button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
