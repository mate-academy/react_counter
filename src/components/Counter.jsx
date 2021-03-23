import React from 'react';
import './Counter.scss';

export class Count extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  }

  increase = () => {
    if (this.state.count % 5 !== 0) {
      this.addOne();
    } else {
      this.addOne();
      this.add100();
    }
  }

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1>
          Count:
          {count}
        </h1>
        <div>
          <button type="button" onClick={this.addOne}>add 1</button>
          <button type="button" onClick={this.add100}>add 100</button>
          <button type="button" onClick={this.increase}>increase</button>
        </div>
      </div>
    );
  }
}
