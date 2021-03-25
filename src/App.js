import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          Count:
          {` ${count}`}
        </h1>
        <div className="buttons">
          <button
            type="button"
            onClick={this.addOne}
          >
            add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
