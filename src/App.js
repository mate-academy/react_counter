import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      increment: 0,
    }
  }

  onClickReaction = () => {
    this.setState({
      increment: ++this.state.increment,
    });
  }

  render () {
    return (
      <div className="wrapper">
        <button
          className="btn"
          onClick={this.onClickReaction}
          type="button"
        >
          Click me
        </button>
        <div className="counter">
          count: {this.state.increment}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
