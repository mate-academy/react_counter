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

  increase = (count) => {
    count % 5 === 0
      ? this.add100()
      : this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="count">
        <h1 className="count__title">
          {'Count: '}
          {count}
        </h1>
        <div className="count__list">
          <button
            className="count__button"
            type="button"
            onClick={this.addOne}
          >
            Add one
          </button>
          <button
            className="count__button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="count__button"
            type="button"
            onClick={() => {
              this.increase(count);
            }}
          >
            {count % 5 === 0
              ? 'Add 100'
              : 'Add one'}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
