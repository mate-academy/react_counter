import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <main className="main">
        <h1>
          {'Count: '}
          {count}
        </h1>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.increase}
          >
            Some magic
          </button>
        </div>
      </main>
    );
  }
}

export default App;
