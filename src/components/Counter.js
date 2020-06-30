import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

  increateCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        {this.state.counter}
        <p>
          <button type="button" onClick={this.increateCounter}>+1</button>
        </p>
      </>
    );
  }
}
