import React from 'react';
import './App.css';

const App = () => (
  <>
    <h1 className="article">Please, press button!</h1>
    <Counter />
  </>
);

class Counter extends React.Component {
  state = {
    count: 0,
  }

  click = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <>
        <h1 className="counter">
          Count:
          {' '}
          {this.state.count}
        </h1>
        <button
          type="button"
          className="button"
          onClick={this.click}
        >
          Click
        </button>
      </>
    );
  }
}

export default App;
