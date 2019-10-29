import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  click = () => {
    this.setState(prev => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          Count: {this.state.counter}
        </h1>
        <button className="ui primary button" onClick={this.click} type="submit">
          Click me
        </button>
      </>
    );
  }
}

export default Counter;
