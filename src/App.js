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

  increase = () => {
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          Count:
          {count}
        </h1>

        <button type="button" onClick={this.addOne}>
          AddOne
        </button>

        <button type="button" onClick={this.add100}>
          Add100
        </button>

        <button type="button" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}

export default App;
