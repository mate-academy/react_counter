import React from 'react';

export class Counter extends React.Component {
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
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <div className="d-flex gap-3 justify-content-center mt-5">
          <button
            type="button"
            onClick={this.addOne}
            className="btn btn-secondary"
          >
            addOne
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="btn btn-secondary"
          >
            add100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="btn btn-secondary"
          >
            increase
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ count: 0 });
            }}
            className="btn btn-secondary"
          >
            reset
          </button>
        </div>

        <h1 className="text-center">
          {`Count: ${this.state.count}`}
        </h1>
      </>
    );
  }
}
