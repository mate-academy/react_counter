import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0
      && count !== 0) {
      this.add100();
    }

    this.addOne();
  };

  clear = () => (
    this.setState({
      count: 0,
    })
  );

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>

        <button type="button" onClick={this.addOne}>Add one</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button type="button" onClick={this.increase}>You never know</button>
        <button type="button" onClick={this.clear}>Clear</button>
      </>
    );
  }
}
