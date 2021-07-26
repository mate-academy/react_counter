import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>{`Count: ${count}`}</h1>
        <div className="App__buttons">
          <button
            type="button"
            className="button is-primary"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="button is-primary is-link"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={this.increase}
          >
            1 or 100
          </button>
        </div>
      </div>
    );
  }
}

export default App;
