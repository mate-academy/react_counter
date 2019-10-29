import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  click = () => {
    this.setState(previous => ({
      ...previous,
      count: previous.count + 1
    }));
  };

  render() {

    return (
      <>
        <div>
          The summ of clicks is
          <strong>{` ${this.state.count}`}</strong>
        </div>
        <button className="btn btn-outline-dark" onClick={this.click} type="submit">
          Click
        </button>
      </>
    );
  }
}

export default Counter;
