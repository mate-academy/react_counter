import React from 'react';
import './App.scss';

interface State {
  number: number,
}

class App extends React.Component<{}, State> {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return {
        number: state.number + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        number: state.number + 100,
      };
    });
  };

  increase = () => {
    if (this.state.number % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState(() => {
      return {
        number: 0,
      };
    });
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.number}
        </h1>
        <button type="button" onClick={this.addOne}>Add 1</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button
          type="button"
          onClick={() => {
            this.increase();
          }}
        >
          Special

        </button>
        <button type="button" onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default App;
