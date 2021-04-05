import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

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
    this.setState(prevState => (
      prevState.count % 5 === 0 ? this.add100() + this.addOne() : this.addOne()
    ));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1 className="card-content">
          Count:
          {count}
        </h1>
        <div className="card-footer">
          <button
            type="button"
            className="button card-footer-item is-info"
            onClick={this.addOne}
          >
            Add one
          </button>
          <button
            type="button"
            className="button card-footer-item is-info"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="button card-footer-item is-info"
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
