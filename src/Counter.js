import React from 'react';

export class Counter extends React.Component {
  state = {
    num: 0,
  }

  handleButton = (event) => {
    this.setState(prevState => (
      {
        num: prevState.num + 1,
      }
    ));
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="head">
          {`Count: ${this.state.num}`}
        </h1>
        <button
          onClick={this.handleButton}
          type="button"
          className="button"
        >
          Click +1
        </button>
      </div>
    );
  }
}
