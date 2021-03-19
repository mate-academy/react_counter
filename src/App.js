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
    this.addOne();
    if (this.state.count % 5 === 0 && this.state.count !== 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>
        <div className="ui buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="ui red basic button"
          >
            Add one
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="ui blue basic button"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="ui green basic button"
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}

export default App;
