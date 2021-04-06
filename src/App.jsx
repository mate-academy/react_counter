import React from 'react';
import 'bulma/css/bulma.css';

export class App extends React.Component {
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
      <div className="columns is-centered">
        <div className="column is-narrow">
          <div className="box has-text-centered">
            <h1 className="is-size-1 mb-5">
              {'Count: '}
              {this.state.count}
            </h1>

            <div className="buttons are-medium is-centered">
              <button
                type="button"
                className="button mx-5"
                onClick={this.addOne}
              >
                Add 1
              </button>

              <button
                type="button"
                className="button mx-5"
                onClick={this.add100}
              >
                Add 100
              </button>

              <button
                type="button"
                className="button mx-5"
                onClick={this.increase}
              >
                Increase
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
