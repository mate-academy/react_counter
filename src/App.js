import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countIncrement = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <section className="area--button">
        <h1>
          <span>Count : </span>
          <span className="count">{this.state.count}</span>
        </h1>
        <button
          className="button__plus"
          type="button"
          onClick={this.countIncrement}
        >
          +
        </button>
      </section>
    );
  }
}
export default App;
