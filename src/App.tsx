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
      return ({
        count: state.count + 1,
      });
    });
  };

  add100 = () => {
    this.setState((state) => {
      return ({
        count: state.count + 100,
      });
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
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <div className="buttons">
          <button
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}

export default App;
