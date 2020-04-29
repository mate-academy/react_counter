import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  increaseCount = () => {
    this.setState(oldState => ({
      count: oldState.count + 1,
    }));
  }

  render() {
    return (
      <div className="count">
        <h1 className="count__header">
          {`Count: ${this.state.count}`}
        </h1>
        <button
          className="count__button"
          type="button"
          onClick={this.increaseCount}
        >
          Increace count!
        </button>
      </div>
    );
  }
}

export default App;
