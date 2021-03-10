import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  add = (addition) => {
    this.setState(prevState => ({
      count: prevState.count + addition,
    }));
  }

  // sorry, but I have NO idea how to call this method
  abraCadabra = () => {
    this.add(1);
    if (!(this.state.count % 5)) {
      this.add(100);
    }
  }

  render() {
    return (
      <>
        <h1>
          {`Count ${this.state.count}`}
        </h1>
        <button
          className="operationalButton"
          type="button"
          onClick={() => {
            this.add(1);
          }}
        >
          add 1
        </button>
        <button
          className="operationalButton"
          type="button"
          onClick={() => {
            this.add(100);
          }}
        >
          add 100
        </button>
        <button
          className="operationalButton"
          type="button"
          onClick={this.abraCadabra}
        >
          abracadabra chida boom
        </button>
      </>
    );
  }
}
