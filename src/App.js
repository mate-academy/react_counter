import React from 'react';

export class App extends React.Component {
  state = {
    count: 0,
  }

  addCount = () => {
    this.setState(prevState => (
      { count: prevState.count + 1 }));
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button type="button" onClick={this.addCount}>+1</button>
      </>
    );
  }
}
