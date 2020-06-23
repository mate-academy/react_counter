import React from 'react';
import { Button } from '../button/Button';

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  increase = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <Button onClick={this.increase} />
      </>
    );
  }
}
