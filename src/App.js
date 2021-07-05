import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

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
    return (
      <div className="ui container">
        <h1 className="ui header">
          Count:
          {this.state.count}
        </h1>

        <button
          className="ui button"
          type="button"
          onClick={this.addOne}
        >
          + 1
        </button>

        <button
          className="ui button"
          type="button"
          onClick={this.add100}
        >
          + 100
        </button>

        <button
          className="ui button"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
