import React from 'react';
import './App.scss';

interface State {
  count: number,
}

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ count: state.count + 100 }));
  };

  increase = () => {
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">{`Count: ${this.state.count}`}</h1>
        <button
          className="btn"
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.add100}
        >
          add100
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}

export default App;
