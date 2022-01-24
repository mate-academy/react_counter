import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
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
      <div className="counter">
        <h1 className="title">
          Count:
          {' '}
          {this.state.count}
        </h1>

        <div className="buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="button"
          >
            Add one
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="button"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
