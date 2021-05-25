import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(prevState => (
      { count: prevState.count + 1 }
    ));
  };

  add100 = () => {
    this.setState(prevState => (
      { count: prevState.count + 100 }
    ));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="App">
        <h1>
          Current count:
          {' '}
          {' '}
          {this.state.count}
        </h1>
        <div className="buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.addOne}
          >
            Add One
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.add100}
          >
            Add Hundred
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
