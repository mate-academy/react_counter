import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1.0,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100.0,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>

        <div className="buttons-field">

          <button
            type="button"
            className="button"
            onClick={this.addOne}
          >
            +1
          </button>

          <button
            type="button"
            className="button"
            onClick={this.add100}
          >
            +100
          </button>

          <button
            type="button"
            className="button"
            onClick={this.increase}
          >
            {'+100 if x%5=0'}
            {'\n'}
            {'then +1'}
          </button>

        </div>
      </>
    );
  }
}

export default App;
