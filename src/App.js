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
    this.setState(start => ({
      count: start.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>
          Count:
          {count}
        </h1>
        <button
          type="button"
          className="button"
          onClick={() => this.addOne()}
        >
          Add 1
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.add100()}
        >
          Add 100
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.increase()}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
