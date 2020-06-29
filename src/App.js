import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

  increaseCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button type="button" onClick={this.increaseCounter}>
          Click
        </button>
      </>
    );
  }
}

export default App;
