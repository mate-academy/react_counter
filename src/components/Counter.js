import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class Counter extends Component {

  state = {
    clickCounter: 0
  }

  clickTimes = () => {
    this.setState(prevState => ({
      ...prevState,
      clickCounter: prevState.clickCounter + 1
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
