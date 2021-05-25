import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    cnt: 0,
  };

  addOne = () => {
    this.setState(state => ({
      cnt: state.cnt + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      cnt: state.cnt + 100,
    }));
  };

  increase = () => ((
    this.addOne(),
    this.state.cnt % 5 === 0 && this.add100()
  ));

  render() {
    const { cnt } = this.state;

    return (
      <div>
        <h1>
          Count:
          { cnt }
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
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
