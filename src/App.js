import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addNumber = (number) => {
    this.setState(state => ({
      counter: state.counter + number,
    }));
  }

  increase = () => {
    const { counter } = this.state;

    if (counter % 5 !== 0) {
      this.addNumber(1);

      return;
    }

    this.addNumber(100);
    this.addNumber(1);
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1 className="App__counter">{counter}</h1>

        <div>
          <button
            className="App__button"
            onClick={() => this.addNumber(1)}
            type="button"
          >
            +1
          </button>

          <button
            className="App__button"
            onClick={() => this.addNumber(100)}
            type="button"
          >
            +100
          </button>

          <button
            className="App__button"
            onClick={this.increase}
            type="button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
