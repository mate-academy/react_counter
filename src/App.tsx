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
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
  };

  increase = () => {
    this.setState((state) => {
      this.addOne();

      return state.count % 5 === 0
        ? this.add100()
        : null;
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">
            Count:
            {' '}
            {count}
          </h1>

          <div className="row">
            <button
              type="button"
              className="button col p-2 p-xl-3"
              onClick={this.addOne}
            >
              Add One
            </button>

            <button
              type="button"
              className="button col p-2 p-xl-3"
              onClick={this.add100}
            >
              Add 100
            </button>

            <button
              type="button"
              className="button col p-2 p-xl-3"
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
