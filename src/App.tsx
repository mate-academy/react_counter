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
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
  };

  increase = () => {
    this.setState((state) => {
      this.addOne();
      if (state.count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div
        className="App"
      >
        <h1
          className="App__title"
        >
          Count:
          {' '}
          {count}
        </h1>
        <div
          className="App__buttons"
        >
          <button
            type="button"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            type="button"
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
