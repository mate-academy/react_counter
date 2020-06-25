import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

  increaseCount = () => {
    this.setState(prevstate => ({
      counter: prevstate.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.counter}`}
        </h1>
        <button type="button" onClick={this.increaseCount}>
          Increase
        </button>
      </>
    );
  }
}

export default App;
