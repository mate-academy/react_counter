import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(
      prev => ({
        count: prev.count + 1,
      }
      ),
    );
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>
        <button type="button" onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

export default App;
