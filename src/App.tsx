import 'bulma/css/bulma.min.css';
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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1 className="title is-1">
          {`Count: ${count}`}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
          className="button is-primary is-rounded"
        >
          One
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="button is-primary is-rounded"
        >
          OneHundred
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="button is-primary is-rounded"
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
