import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <h1>
            Count:
            {this.state.count}
          </h1>
          <div className="App__buttons">
            <button
              type="button"
              className="App__buttons button"
              onClick={this.addOne}
            >
              plus 1
            </button>
            <button
              type="button"
              className="App__buttons button"
              onClick={this.add100}
            >
              plus 100
            </button>
            <button
              type="button"
              className="App__buttons button"
              onClick={this.increase}
            >
              increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
