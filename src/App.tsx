import React from 'react';
import './App.scss';

class App extends React.Component<{}, { adder: number }> {
  state = {
    adder: 0,
  };

  addOne = () => this.setState((num) => ({ adder: num.adder + 1 }));

  add100 = () => this.setState((num) => ({ adder: num.adder + 100 }));

  increase = () => {
    if (this.state.adder % 5 === 0 && this.state.adder > 0) {
      this.add100();
    }

    this.addOne();
  };

  resetAdder = () => this.setState({ adder: 0 });

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {`Count: ${this.state.adder}`}
        </h1>
        <button
          type="button"
          className="App__button"
          onClick={this.addOne}
        >
          add 1
        </button>
        <button
          type="button"
          className="App__button"
          onClick={this.add100}
        >
          add 100
        </button>
        <button
          type="button"
          className="App__button"
          onClick={this.increase}
        >
          add 1 or add 101
        </button>
        <button
          type="button"
          className="App__button"
          onClick={this.resetAdder}
        >
          reset
        </button>
      </div>
    );
  }
}

export default App;
