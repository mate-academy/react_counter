import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

interface State {
  count: number;
}

class App extends React.Component<{}, State> {
  state: State = {
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
      this.addOne();

      if (state.count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App bg-warning vh-100 p-3">
        <div className="container text-center">
          <h1 className="title mb-4">
            Count:
            {' '}
            {count}
          </h1>

          <div className="row">
            <button
              type="button"
              className="button col p-2 p-xl-3 btn btn-success rounded-pill"
              onClick={this.addOne}
            >
              Add One
            </button>

            <button
              type="button"
              className="button col p-2 p-xl-3 btn btn-success mx-4 rounded-pill"
              onClick={this.add100}
            >
              Add 100
            </button>

            <button
              type="button"
              className="button col p-2 btn btn-success p-xl-3 rounded-pill"
              onClick={this.increase}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
