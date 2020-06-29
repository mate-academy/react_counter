import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.counter}`}</h1>
        <button type="button" onClick={this.increment}>+</button>
      </>
    );
  }
}

export default App;
