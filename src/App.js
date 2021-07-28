import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { add100, addOne, increase } = this;
    const { count } = this.state;

    return (
      <>
        <h1>
          {`Count: ${count}`}
        </h1>
        <button type="button" onClick={addOne}>
          addOne
        </button>
        <button type="button" onClick={add100}>
          add100
        </button>
        <button type="button" onClick={increase}>
          increase
        </button>
      </>
    );
  }
}

export default App;
