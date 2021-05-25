import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    number: 0,
  };

  add100 = () => {
    this.setState(prevState => ({
      number: prevState.number + 100,
    }));
  };

  addOne = () => {
    this.setState(prevState => ({
      number: prevState.number + 1,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.number % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { number } = this.state;

    return (
      <div className="wrapper">
        <h1>{number}</h1>
        <button className="btn" type="button" onClick={this.addOne}>
          Add 1
        </button>
        <button className="btn" type="button" onClick={this.add100}>
          Add 100
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
