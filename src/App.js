import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  buttonClick = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          type="button"
          onClick={this.buttonClick}
        >
          Click
        </button>
      </>
    );
  }
}

export default App;
