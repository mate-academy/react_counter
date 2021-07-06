import React from 'react';
import './App.scss';

class App extends React.Component {
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

  increase = () => {
    this.addOne();
    if ((this.state.count + 1) % 5 === 0) {
      this.add100();
    }
  }

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          onClick={this.addOne}
          type="button"
        >
          +1
        </button>
        <button
          onClick={this.add100}
          type="button"
        >
          +100
        </button>
        <button
          onClick={this.increase}
          type="button"
        >
          increase
        </button>
      </div>
    );
  }
}

export default App;
