import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

handleButton = (event) => {
  this.setState(previousState => (
    {
      counter: previousState.counter + 1,
    }
  ));
};

render() {
  return (
    <div>
      <h1>
        {`Count: ${this.state.counter}`}
      </h1>
      <button type="button" onClick={this.handleButton}>
        Increment
      </button>
    </div>
  );
}
}
