import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

    handleClick = () => {
      this.setState(state => ({
        counter: state.counter + 1,
      }));
    }

    render() {
      const { counter } = this.state;

      return (
        <>
          <h1>
            Count:
            {counter}
          </h1>
          <button type="button" onClick={this.handleClick}>Increase</button>
        </>
      );
    }
}

export default App;
