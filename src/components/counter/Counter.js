import React from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    const clicker = () => {
      this.setState(prevCount => ({
        count: prevCount.count + 1,
      }));
    };

    return (
      <>
        <div>
          You clicked { count } times
        </div>
        <Button onClick={clicker}>
          Click
        </Button>
      </>
    );
  }
}

export default Counter;
