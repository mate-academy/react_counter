import React from 'react';
import './App.scss';

type State = {
  number: number
};

class App extends React.Component<{}, State> {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState((state) => ({ number: state.number + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ number: state.number + 100 }));
  };

  increase = () => {
    if (this.state.number % 5 === 0) {
      this.add100();
      this.setState((state) => ({ number: state.number + 1 }));
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <>
        <h1>
          {'Count: '}
          {this.state.number}
        </h1>

        <button
          type="button"
          onClick={() => {
            this.addOne();
          }}
        >
          One more
        </button>

        <button
          type="button"
          onClick={() => {
            this.add100();
          }}
        >
          A hundred more
        </button>

        <button
          type="button"
          onClick={() => {
            this.increase();
          }}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
