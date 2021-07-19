import React from 'react';
import { Button } from '../Button/Button';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0 && this.state.count > 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        <div className="btn-group">
          <Button
            innerText="Add 1"
            action={this.addOne}
          />
          <Button
            innerText="Add 100"
            action={this.add100}
          />
          <Button
            innerText="Increase"
            action={this.increase}
          />
        </div>
      </>
    );
  }
}
