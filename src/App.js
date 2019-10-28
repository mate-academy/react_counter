import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const clickHandler = () => {
      this.setState(prevState => ({
        count: ++prevState.count
      }));
    };

    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={clickHandler}>Increment Count</button>
      </div>
    );
  }
}

export default App;
