import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  plusOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  plus100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  add100 = () => {
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.plus100();
      }

      this.plusOne();
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
              onClick={this.plusOne}
            >
              plus 1
            </button>
            <button
              type="button"
              className="App__buttons button"
              onClick={this.plus100}
            >
              plus 100
            </button>
            <button
              type="button"
              className="App__buttons button"
              onClick={this.add100}
            >
              {this.state.count % 5 === 0 ? 'add100' : 'plus 1'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
