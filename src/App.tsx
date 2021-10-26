import React from 'react';
import './App.scss';

interface State {
  num: number,
}

class App extends React.Component<{}, State> {
  state = {
    num: 0,
  };

  addOne = () => {
    this.setState(state => ({
      num: state.num + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      num: state.num + 100,
    }));
  };

  increase = () => {
    if (this.state.num % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({
      num: 0,
    });
  };

  render() {
    const { num } = this.state;

    return (
      <div className="App">
        <h1>
          {`Count: ${num}`}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          add100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          RESET
        </button>
      </div>
    );
  }
}

export default App;
