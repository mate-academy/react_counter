import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prev => ({
      count: prev.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.increase}
          >
            increase
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.reset}
          >
            reset
          </button>
        </div>
      </>
    );
  }
}

export default App;
