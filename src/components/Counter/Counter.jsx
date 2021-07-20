import React from 'react';
import Button from '../Buttons/Buttons';
import './Counter.scss';

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
        <div className="calculate__container-button">
          <Button
            callback={this.addOne}
            name="add one"
          />
          <Button
            callback={this.add100}
            name="add 100"
          />
          <Button
            callback={this.increase}
            name="increse"
          />
        </div>
      </div>
    );
  }
}

export default Counter;
