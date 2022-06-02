import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(() => {
      return {
        // eslint-disable-next-line react/no-access-state-in-setstate
        count: this.state.count + 1,
      };
    });
  };

  add100 = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ count: this.state.count + 100 });
  };

  increase = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.state.count % 5 === 0 && this.state.count !== 0
      ? this.add100()
      : this.addOne();
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <div className="container">
          <button
            type="button"
            className="btn"
            onClick={this.addOne}
          >
            Add 1
          </button>
        </div>
        <div className="container">
          <button
            type="button"
            className="btn"
            onClick={this.add100}
          >
            Add 100
          </button>
        </div>
        <div className="container">
          <button
            type="button"
            className="btn"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}

export default App;
