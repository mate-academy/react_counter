// import { count } from 'console';
import React from 'react';
import './App.scss';

type State = {
  count: number
};

class App extends React.Component<{}, State> {
  state = {
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
    this.setState((State) => {
      return {
        count: State.count + 100,
      };
    });
  };

  increase = () => {
    const { count } = this.state;

    if (!(count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          {`Count: ${count}`}
        </h1>
        <button
          className="button"
          type="button"
          onClick={() => this.addOne()}
        >
          addOne
        </button>
        <button
          className="button"
          type="button"
          onClick={() => this.add100()}
        >
          add100
        </button>
        <button
          className="button"
          type="button"
          onClick={() => this.increase()}
        >
          increase
        </button>
      </>
    );
  }
}

export default App;
