import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type State = {
  counter: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => (
      { counter: state.counter + 1 }
    ));
  };

  add100 = () => {
    this.setState((state) => (
      { counter: state.counter + 100 }
    ));
  };

  increase = () => {
    if (!(this.state.counter % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          Count:
          {' '}
          {counter}
        </h1>

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
          Increase
        </button>
      </>
    );
  }
}
export default App;
