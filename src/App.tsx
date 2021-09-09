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
      this.addOne();
    } else {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="card">
        <h1 className="card-title">
          Count:
          {' '}
          {count}
        </h1>
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
    );
  }
}

export default App;
