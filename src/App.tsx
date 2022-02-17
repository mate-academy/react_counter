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
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
      }

      this.addOne();

      return state;
    });
  };

  reset = () => {
    this.setState((state) => ({
      count: state.count * 0,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          {`Count: ${count}`}
        </h1>
        <div>
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

          <button
            type="button"
            onClick={this.reset}
          >
            reset
          </button>
        </div>
      </>
    );
  }
}

export default App;
