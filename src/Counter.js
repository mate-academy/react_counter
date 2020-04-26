
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.onclick = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    };
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button type="button" onClick={this.onclick}>Click for count</button>
      </>
    );
  }
}

export default Counter;
