import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState(state => (
      { count: state.count + 1, }
    ));
  }

  render() {
    return (
      <div>
        <h1>
          Count: {this.state.count}
        </h1>
        <button type="button" onClick={this.increase}>+</button>
      </div>
    );
  }
}
