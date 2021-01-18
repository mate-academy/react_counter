import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

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
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="center-block">
          <h1>
            Count:
            {' '}
            {this.state.count}
          </h1>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              onClick={this.addOne}
              type="button"
              className="btn btn-info"
            >
              add 1
            </button>
            <button
              onClick={this.add100}
              type="button"
              className="btn btn-success"
            >
              add 100
            </button>
            <button
              onClick={this.increase}
              type="button"
              className="btn btn-warning"
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
