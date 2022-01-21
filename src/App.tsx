import React from 'react';
import './App.scss';

class App extends React.Component {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state: State) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state: State) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.setState((state: State) => {
      if (state.count % 5 === 0) {
        return {
          count: state.count + 100,
        };
      }

      return {
        count: state.count,
      };
    });

    this.setState((state: State) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">{`Count: ${this.state.count}`}</h1>
        <div className="counter__container">
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
    );
  }
}

export default App;
