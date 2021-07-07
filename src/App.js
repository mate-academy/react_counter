import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if ((this.state.count + 1) % 5 === 0) {
      this.add100();
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="heading">
          Count:
          {' '}
          {count}
        </h1>

        <section className="buttons">
          <section className="buttons__main">
            <button
              className="buttons__button"
              type="button"
              onClick={this.addOne}
            >
              Add 1
            </button>

            <button
              className="buttons__button"
              type="button"
              onClick={this.add100}
            >
              Add 100
            </button>

            <button
              className="buttons__button"
              type="button"
              onClick={this.increase}
            >
              Increase
            </button>
          </section>

          <button
            className="buttons__button buttons__button--reset"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </section>
      </div>
    );
  }
}

export default App;
