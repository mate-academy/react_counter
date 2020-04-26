import React from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div className="container">
        <h1>
          {'Count: '}
          {this.state.count}
        </h1>
        <button type="button" onClick={this.add}>
          Add One
        </button>
      </div>
    );
  }
}

export default Count;
