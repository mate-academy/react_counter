import React from 'react';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state = {
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

  add1or100 = () => {
    this.setState((prevState) => {
      if (prevState.count % 5 === 0) {
        this.addOne();
        this.add100();
      } else {
        this.addOne();
      }
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1>
          {'Count is '}
          {count}
        </h1>
        <div className="buttons">
          <button className="buttons__item" type="button" onClick={this.addOne}>Add 1</button>
          <button className="buttons__item" type="button" onClick={this.add100}>Add 100</button>
          <button className="buttons__item" type="button" onClick={this.add1or100}>Add 1 or 100</button>
        </div>
      </div>
    );
  }
}
