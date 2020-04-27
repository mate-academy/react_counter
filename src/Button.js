import React from 'react';

class Button extends React.Component {
  state = {
    count: 0,
  }

  increase = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  decrease = () => {
    this.setState(state => ({
      count: state.count - 1,
    }));
  };

  reset = () => {
    this.setState(state => ({
      count: 0,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          Count:
          {count}
        </h1>
        <button type="button" onClick={this.increase}>Increase</button>
        <button type="button" onClick={this.decrease}>Decrease</button>
        <button type="button" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Button;
