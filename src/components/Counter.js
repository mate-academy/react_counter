import React from 'react';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  clicker = () => {
    this.setState(prevCount => ({
      counter: prevCount.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          You clicked &apos;
          { counter }
          &apos; times!
        </h1>
        <button type="submit" onClick={this.clicker}>
          Cklick me!
        </button>
      </>
    );
  }
}

export default Counter;
