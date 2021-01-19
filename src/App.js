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

  divisibleBy5 = () => {
    if (this.state.count % 5 === 0) {
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
        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.addOne}
          >
            addOne
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.add100}
          >
            add100
          </button>

          <button
            type="button"
            className="btn btn-warning"
            onClick={this.divisibleBy5}
          >
            divisible by 5
          </button>
        </div>
      </div>
    );
  }
}

export default App;
