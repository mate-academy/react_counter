import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increase = () => {
      this.setState(state => ({
        counter: state.counter + 1,
      }));
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increase} type="submit">++</button>
      </>
    );
  }
}

export default Counter;
