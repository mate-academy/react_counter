import React from 'react';

export class App extends React.Component {
  state = {
    counter: 0,
  }

  incrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button type="button" onClick={this.incrementCounter}>+1</button>
      </>
    );
  }
}
