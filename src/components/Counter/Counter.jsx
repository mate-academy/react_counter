import React from 'react';
import Button from '../Buttons/Buttons';

class Counter extends React.Component {
  state = {
    x: 0,
  }

  addOne = () => {
    this.setState(state => ({ x: state.x + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ x: state.x + 100 }));
  };

  increase = () => {
    if (this.state.x % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { x } = this.state;

    return (
      <div className="calculate">
        <h1>
          Count:
          {
           x
          }
        </h1>
        <Button
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </div>
    );
  }
}

export default Counter;
