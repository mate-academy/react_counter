import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <header className="counter__header">
          <h1 className="title"> Count : </h1>
          <span className="title-counter">{count}</span>
        </header>

        <section className="counter__controler">

          <div className="button-wrapper">

            <button
              type="button"
              className="button"
              onClick={this.addOne}
            >
              1
            </button>

          </div>

          <div className="button-wrapper">

            <button
              type="button"
              className="button"
              onClick={this.add100}
            >
              100
            </button>

          </div>
          <div className="button-wrapper">

            <button
              type="button"
              className="button"
              value="1"
              onClick={this.increase}
            >
              {' '}
              {
                this.state.count % 5 === 0 ? 101 : 1
              }
            </button>

          </div>

        </section>
      </div>
    );
  }
}

export default App;
