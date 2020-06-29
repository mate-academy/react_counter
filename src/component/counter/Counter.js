import React from 'react';
import { Button } from '../button/Button';

export class Counter extends React.Component {
  state = {
    counter: 0,
  };

  handleChange = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <Button onClick={this.handleChange} />
      </>
    );
  }
}
