import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    x: 0,
  }

  addOne = () => {
    this.setState(state => ({ x: state.x + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ x: state.x + 100 }));
  };

  increase = () => {
    if (this.state.x % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { x } = this.state;

    return (
      <div className="calculate">
        <h1>
          Count:
          {
           x
          }
        </h1>
        <button
          className="calculate__add-one"
          onClick={this.addOne}
          type="button"
        >
          Add 1
        </button>
        <button
          className="calculate__add-one_hundred"
          onClick={this.add100}
          type="button"
        >
          Add 100
        </button>
        <button
          className="calculate__add-increase"
          onClick={this.increase}
          type="button"
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
