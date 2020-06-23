import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  increase = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Counter:
          {' '}
          {count}
        </h1>
        <button type="submit" onClick={this.increase}>Increase</button>
      </>
    );
  }
}

export { Counter };
