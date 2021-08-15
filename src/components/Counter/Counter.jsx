import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  }

  addWisely = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  }

  render() {
    const { count } = this.state;
    const { addOne, add100, addWisely: smartAdd } = this;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        <button type="button" onClick={addOne}>+1</button>
        <button type="button" onClick={add100}>+100</button>
        <button type="button" onClick={smartAdd}>smart Add</button>
        <br />
        * 0 / 5 = 0 and I think this is divisible
      </>
    );
  }
}
