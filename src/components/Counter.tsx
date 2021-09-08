import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 100,
      };
    });
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
      <div className="w-50 mx-auto pt-5 ">
        <h1 className="d-flex justify-content-center">
          {`Count: ${count}`}
        </h1>

        <div className="d-flex justify-content-sm-between">
          <button
            type="button"
            className="btn btn-info btn-lg"
            onClick={() => {
              this.addOne();
            }}
          >
            add One
          </button>

          <button
            type="button"
            className="btn btn-info btn-lg"
            onClick={() => {
              this.add100();
            }}
          >
            add 100
          </button>

          <button
            type="button"
            className="btn btn-info btn-lg"
            onClick={() => {
              this.increase();
            }}
          >
            increase
          </button>
        </div>

      </div>
    );
  }
}
