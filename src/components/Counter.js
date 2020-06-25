import React from 'react';

export class Counter extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      counter: 0,
    };
  }

  count = () => {
    this.setState(prev => ({
      counter: prev.counter + 1,
    }));
  }

  render() {
    return (
      <>
        {this.state.counter}
        <p>
          <button type="button" onClick={this.count}>+1</button>
        </p>
      </>
    );
  }
}
