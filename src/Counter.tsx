import React from 'react';

class Counter extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return ({
        count: prevState.count + 1,
      });
    });
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1 className="title">
          Count:
          {' '}
          {count}
        </h1>

        <div className="Button-section">
          <button
            type="button"
            className="Button-section__one"
            onClick={this.addOne}
          >
            Add one
          </button>

          <button
            type="button"
            className="Button-section__hundred"
            onClick={this.add100}
          >
            Add one hundred
          </button>

          <button
            type="button"
            className="Button-section__increase"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
