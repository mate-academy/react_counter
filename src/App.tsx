import React from 'react';
import './App.scss';

type State = {
  num: number,
};

class App extends React.Component<{}, State> {
  state = {
    num: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      num: state.num + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.num % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { num } = this.state;

    return (
      <>
        <h1>
          COUNT:
          <span className="number">{num}</span>
        </h1>
        <div className="button-section">
          <button
            className="buttons"
            type="button"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            className="buttons"
            type="button"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            className="buttons"
            type="button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </>
    );
  }
}

export default App;
