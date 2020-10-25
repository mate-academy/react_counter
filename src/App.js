import React from 'react';
import './App.scss';

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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          {
            `Count: ${count}`
          }
        </h1>
        <button
          type="button"
          onClick={this.addOne}
          className="btn btn-outline-success"
        >
          Add one!
        </button>
        <button
          type="button"
          onClick={this.add100}
          className="btn btn-outline-warning"
        >
          Add hundred!
        </button>
        <button
          type="button"
          onClick={this.increase}
          className="btn btn-outline-danger"
        >
          Add one or hundred!
        </button>
      </div>
    );
  }
}

export default App;
