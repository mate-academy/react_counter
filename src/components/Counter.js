import React from 'react';
import { Button } from 'semantic-ui-react';
import './counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handler() {
    this.setState(prevCount => ({
      ...prevCount,
      counter: prevCount.counter + 1,
    }));
  };

  render() {
    const {counter} = this.state;
    const handler = this.handler.bind(this);

    return (
      <div className="counter_block">
        <div className="counter">
            You clicked {counter} times.
        </div>
        <button onClick={handler} class="ui primary button">
            Click me
        </button>
      </div>
    );
  }
}
export default Counter;
