import React from 'react';
import './Count.scss';

class Count extends React.Component {
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
    if (this.state.count % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Count">
        <h1 className="Count__title">{`Count: ${count}`}</h1>
        <div className="Count__buttonsWrapper">
          <button
            type="button"
            className="Count__btn"
            onClick={this.addOne}
          >
            Add one
          </button>

          <button
            type="button"
            className="Count__btn"
            onClick={this.add100}
          >
            add hundred
          </button>

          <button
            type="button"
            className="Count__btn"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default Count;
