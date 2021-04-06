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
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="column is-half">
        <div className="box">
          <h1 className="title is-5">
            Count:
            {count}
          </h1>
          <div className="content">
            <button
              type="button"
              className="button is-light mr-5"
              onClick={this.addOne}
            >
              Add 1
            </button>
            <button
              type="button"
              className="button is-light mr-5"
              onClick={this.add100}
            >
              Add 100
            </button>
            <button
              type="button"
              className="button is-light"
              onClick={this.increase}
            >
              Totally weird button
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
