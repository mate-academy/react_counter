import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  incrementCount = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          Count
          {' '}
          {this.state.count}
        </h1>
        <button className="button" type="submit" onClick={this.incrementCount}>
          Click
        </button>
      </>
    );
  }
}

export default App;
