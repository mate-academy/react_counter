import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  increaseCount = 0;

  addOne = () => {
    if (this.increaseCount === 5) {
      this.increaseCount = 0;
    }

    this.increaseCount += 1;
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
    if (this.increaseCount === 5) {
      this.increaseCount = 0;
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>

        <button type="button" onClick={this.addOne}>
          addOne
        </button>

        <button type="button" onClick={this.add100}>
          add100
        </button>

        <button type="button" onClick={this.increase}>
          increase
        </button>
      </>
    );
  }
}

export default App;
