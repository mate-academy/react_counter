import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handlerClick = (event) => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="submit"
          onClick={this.handlerClick}
        >
          Press me for count
        </button>
      </>
    );
  }
}
