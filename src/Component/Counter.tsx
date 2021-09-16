import React from 'react';
import './Style.css';

type Props = {
  count: number,
  addOne: () => void,
  add100: () => void,
  increase: () => void,
};

export class Counter extends React.PureComponent<Props> {
  render() {
    return (
      <>
        <div className="title">
          <h1>
            Count:
            {' '}
            {this.props.count}
          </h1>
        </div>
        <button
          type="button"
          className="button"
          onClick={this.props.addOne}
        >
          addOne
        </button>
        <button
          type="button"
          className="button"
          onClick={this.props.add100}
        >
          add100
        </button>
        <button
          type="button"
          className="button"
          onClick={this.props.increase}
        >
          increase
        </button>
      </>
    );
  }
}
