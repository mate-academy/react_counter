import React from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  clicker = () => {
    this.setState(prevCount => {
      return {
        ...prevCount,
        count: prevCount.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>
          You clicked { count } times
        </div>
        <Button onClick={this.clicker}>
          Click
        </Button>
      </>
    );
  }
}

export default Counter;
