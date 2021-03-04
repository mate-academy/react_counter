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
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => this.setState((prevState) => {
    if (prevState.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  });

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button type="button" onClick={this.addOne}>
          addOnce
        </button>
        <button type="button" onClick={this.add100}>
          add100
        </button>
        <button type="button" onClick={this.increase}>
          addOnce
        </button>
      </div>
    );
  }
}

export default App;
