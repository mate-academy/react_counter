import React from 'react';
import './Count.scss';

class Count extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  }

  increase = () => {
    this.setState((prevState) => {
      if (prevState.count % 5 === 0) {
        return { count: prevState.count + 100 };
      }

      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>

        <div className="btns">
          <button
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
          >
            Add 1 or 101
          </button>
        </div>
      </>
    );
  }
}

export default Count;
