import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  onClickButton = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    const { onClickButton, state: { counter } } = this;
    console.log(this);

    return (
      <>
        <button type="button" onClick={onClickButton}>Click to add</button>
        <div>{counter}</div>
      </>
    );
  }
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
