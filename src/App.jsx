import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState(prev => ({
      number: prev.number + 1,
    }));
  };

  add100 = () => {
    this.setState(prev => ({
      number: prev.number + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if ((this.state.number + 1) % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { number } = this.state;

    return (
      <div className="container">
        <h1 className="container__heading">
          {`Count: ${number}`}
        </h1>
        <ul className="container__list">
          <li>
            <button
              type="button"
              className="container__button"
              onClick={this.addOne}
            >
              1
            </button>
          </li>

          <li>
            <button
              type="button"
              className="container__button"
              onClick={this.add100}
            >
              100
            </button>
          </li>

          <li>
            <button
              type="button"
              className="container__button"
              onClick={this.increase}
            >
              increase
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
