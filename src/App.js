import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

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
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <Counter
        count={this.state.count}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

const Counter = ({ count, addOne, add100, increase }) => (
  <div className="count">
    <h1>
      Count:
      {count}
    </h1>
    <button type="button" onClick={addOne}>
      Add one
    </button>
    <button type="button" onClick={add100}>
      Add 100
    </button>
    <button type="button" onClick={increase}>
      Increase
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};

export default App;
