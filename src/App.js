import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if ((this.state.counter + 1) % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="screen">{this.state.counter.toString()}</h1>
          <div className="remote">
            <button
              type="button"
              className="remote__button"
              onClick={this.addOne}
            >
              Add One
            </button>
            <button
              type="button"
              className="remote__button"
              onClick={this.add100}
            >
              Add 100
            </button>
            <button
              type="button"
              className="remote__button"
              onClick={() => {
                this.increase();
              }}
            >
              Increase
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
