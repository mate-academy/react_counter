import React from 'react';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => this.setState((state) => ({
    ...state,
    count: state.count + 1,
  }));

  add100 = () => this.setState((state) => ({
    ...state,
    count: state.count + 100,
  }));

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`count: ${count}`}</h1>
        <div className="buttons">
          <button type="button" onClick={this.addOne}>add one</button>
          <button type="button" onClick={this.add100}>add 100</button>
          <button type="button" onClick={this.increase}>increase</button>
        </div>
      </>
    );
  }
}
