import React from 'react';
import './App.scss';
import 'bulma';

class App extends React.Component {
  state = {
    count: 0,
  }

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
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1 className="title">
          {`Count: ${count}`}
        </h1>
        <div className="button-box">
          <button
            className="button is-outlined is-primary"
            type="button"
            onClick={this.addOne}
          >
            Add one
          </button>
          <button
            className="button is-outlined is-primary"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="button is-outlined is-primary"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
          <button
            className="button is-outlined is-primary"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
