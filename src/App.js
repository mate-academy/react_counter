import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    number: 0,
  }

  addOne = () => {
    this.setState(state => ({
      number: state.number + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      number: state.number + 100,
    }));
  };

  increase = () => {
    if ((this.state.number + 1) % 5 === 0) {
      this.setState(state => ({
        number: state.number + 101,
      }));
    } else {
      this.setState(state => ({
        number: state.number + 1,
      }));
    }
  };

    reset = () => {
      this.setState({ number: 0 });
    };

    render() {
      return (
        <div className="field">
          <h2 className="field__header">
            Count:
            {this.state.number}
          </h2>

          <button
            type="button"
            className="field__button"
            onClick={this.addOne}
          >
          Add 1
          </button>

          <button
            type="button"
            className="field__button"
            onClick={this.add100}
          >
          Add 100
          </button>

          <button
            type="button"
            className="field__button"
            onClick={this.increase}
          >
          Try your luck
          </button>

          <button
            type="button"
            className="field__button"
            onClick={this.reset}
          >
          Reset counter
          </button>

        </div>
      );
    }
}

export default App;
