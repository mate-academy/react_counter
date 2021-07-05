import React from 'react';
import './App.scss';

class App extends React.Component {
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

    if ((this.state.count + 1) % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">{`Count: ${count}`}</h1>

        <div className="App__buttons buttons">
          <button
            type="button"
            className="buttons__button buttons__button--red"
            onClick={this.addOne}
          >
            Add one
          </button>

          <button
            type="button"
            className="buttons__button buttons__button--green"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="buttons__button buttons__button--yellow"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
