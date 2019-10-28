import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class Counter extends Component {

  state = {
    clickCounter: 0
  }

  clickTimes = () => {
    this.setState(prevCounter => ({
      clickCounter: ++prevCounter.clickCounter
    }));
  }

  render() {
    return (
      <>
        <div>Count: {this.state.clickCounter}</div>
        <Button primary
        onClick={this.clickTimes}>Click here</Button>
      </>
    );
  }
}
