import React from 'react';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    const clicker = () => {
      this.setState(firstCount => ({
        counter: firstCount.counter + 1,
      }));
    };
    return (
      <>
        <h1>
          You clicked &apos;
          { counter }
          &apos; times!
        </h1>
        <button type="submit" onClick={clicker}>
          Cklick me!
        </button>
      </>
    );
  }
}

export default Counter;
