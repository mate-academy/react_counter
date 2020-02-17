import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  click = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>
        Count:
          {this.state.count}
        </h1>
        <button onClick={this.click} type="submit">
          Click
        </button>
      </div>
    );
  }
}
