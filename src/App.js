import React from 'react';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increaseCounter = () => {
    this.setState(prevState => (
      { counter: prevState.counter + 1 }
    ));
  };

  render() {
    return (
      <>
        <h1>
          Count:
          { this.state.counter }
        </h1>

        <button type="button" onClick={this.increaseCounter}>
          increase counter
        </button>
      </>
    );
  }
}
