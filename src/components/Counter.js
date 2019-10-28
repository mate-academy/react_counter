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
    const click = () => {
      this.setState(previous => ({
        count: previous.count + 1,
      }));
    };

    return (
      <>
        <div>
          The summ of clicks is
          <strong>{` ${count}`}</strong>
        </div>
        <button className="btn btn-outline-dark" onClick={click} type="submit">
          Click
        </button>
      </>
    );
  }
}

export default Counter;
