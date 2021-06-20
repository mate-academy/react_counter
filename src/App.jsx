import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    const count = localStorage.getItem('count');

    if (count !== null) {
      this.setState({
        count: +count,
      });
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('count', this.state.count);
    });
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
    this.setState(state => ({
      count: state.count + 101,
    }));
  };

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <header className="counter__header">
          <h1 className="title">Count: </h1>
          <span className="title-counter">{count}</span>
        </header>

        <section className="counter__panel">
          <div className="button-wrapper">
            <button type="button" className="button" onClick={this.addOne}>
              Add One
            </button>
          </div>

          <div className="button-wrapper">
            <button type="button" className="button" onClick={this.add100}>
              Add 100
            </button>
          </div>

          <div className="button-wrapper">
            <button
              type="button"
              className="button"
              onClick={count % 5 === 0 && count !== 0
                ? this.increase : this.addOne}
            >
              {count % 5 === 0 ? 101 : 1}
            </button>
          </div>

          <div className="button-wrapper">
            <button
              type="button"
              className="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
