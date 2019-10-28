import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    const clickCounter = () => {
      this.setState(prev => ({
        count: prev.count + 1,
      }));
    };

    return (
      <>
        <div className="counterText">
          You clicked { count } times.
        </div>
        <button type="button" id="counter" onClick={clickCounter}>
          Click me!
        </button>
      </>
    );
  }
}

export default Counter;
