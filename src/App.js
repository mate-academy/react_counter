import React from 'react';
import './App.css';

const App = () => (
  <>
    <Counter />
  </>
);

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
        <h3>
          Counter:
          {count}
        </h3>
        <button type="button" onClick={this.increase}>
          Click me!
        </button>
      </>
    );
  }
}

export default App;
