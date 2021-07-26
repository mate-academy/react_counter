import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(
      state => ({ count: state.count + 1 }),
    );
  };

  add100 = () => {
    this.setState(
      state => ({ count: state.count + 100 }),
    );
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
      <div className="box">
        <h1>
          {`Count: ${count}`}
        </h1>
        <div className="buttons are-medium is-centered">
          <button
            className="button is-warning"
            onClick={this.addOne}
            type="button"
          >
            add 1
          </button>
          <button
            className="button is-primary"
            onClick={this.add100}
            type="button"
          >
            add 100
          </button>
          <button
            className="button is-info"
            onClick={this.increase}
            type="button"
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
