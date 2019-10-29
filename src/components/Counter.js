import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  clickCounter = () => {
    this.setState(prev => ({
      prev,
      count: prev.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div className="counterText">
          You clicked { count } times.
        </div>
        <button type="button" id="counter" onClick={this.clickCounter}>
          Click me!
        </button>
      </>
    );
  }
}

export default Counter;
