import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => this.setState(state => ({ counter: state.counter + 1 }));

  add100 = () => this.setState(state => ({ counter: state.counter + 100 }));

  increase = () => {
    this.addOne();

    if (this.state.counter % 5) {
      return;
    }

    this.add100();
    document.body.style.background = `#${Math.random().toString().slice(2, 8)}`;
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>{`Count: ${counter}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          Magic
        </button>
      </>
    );
  }
}

export default App;
