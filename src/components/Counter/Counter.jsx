import React from 'react';
import Button from '../Buttons/Buttons';
import './Counter.scss';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="calculate">
        <h1>
          Count:
          {` ${count} `}
        </h1>
        <div className="calculate__container-button">
          <Button
            onCLick={this.addOne}
            name="add one"
          />
          <Button
            onCLick={this.add100}
            name="add 100"
          />
          <Button
            onCLick={this.increase}
            name="increse"
          />
        </div>
      </div>
    );
  }
}

export default Counter;
