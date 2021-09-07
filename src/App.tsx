import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="col">
          {'Count: '}
          {count}
        </h1>

        <button
          className="col-2 m-2 py-2 border-0 border-secondary rounded"
          type="button"
          onClick={this.addOne}
        >
          Add one
        </button>

        <button
          className="col-2 m-2 py-2 border-0 border-secondary rounded"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          className="col-2 m-2 py-2 border-0 border-secondary rounded"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
