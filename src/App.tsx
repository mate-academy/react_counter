import React from 'react';
import './App.scss';

const colors = [
  { id: 1, color: 'yellow', hex: '#FFFF00' },
  { id: 2, color: 'orange', hex: '#FFA500' },
  { id: 3, color: 'red', hex: '#FF0000' },
];

interface State {
  counter: number,
  index: number,
}

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
    index: 0,
  };

  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.counter > 99) {
        this.setState({ index: 1 });
      }

      if (this.state.counter > 199) {
        this.setState({ index: 2 });
      }
    }, 100);
  }

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter, index } = this.state;

    return (
      <>
        <h1 className="counter" style={{ color: colors[index].hex }}>
          Count:
          {counter}
        </h1>
        <div className="buttons">
          <button
            type="button"
            className="buttons__button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={this.increase}
          >
            Add 1 or 101
          </button>
        </div>
      </>
    );
  }
}

export default App;
