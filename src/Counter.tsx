import React from 'react';

interface State {
  counter: number,
}

export class Counter extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => this.setState(state => ({
    counter: state.counter + 1,
  }));

  add100 = () => this.setState(state => ({
    counter: state.counter + 100,
  }));

  private isDivFive = () => (
    this.state.counter % 5 === 0) && (this.state.counter
  );

  increase = () => {
    this.addOne();

    if (this.isDivFive()) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>{`Count: ${counter}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        {' '}
        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        {' '}
        <button
          type="button"
          onClick={this.increase}
        >
          {(this.isDivFive())
            ? 'Add 100'
            : 'Increase'}
        </button>
      </>
    );
  }
}
