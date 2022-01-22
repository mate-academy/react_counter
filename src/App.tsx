import React from 'react';
import './App.scss';

type State = {
  counter: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="content" style={{ width: '300px' }}>
        <div>
          <h1 className="content__title">{`Count: ${this.state.counter}`}</h1>
        </div>
        <div className="content__buttons">
          <button
            className="content__button button is-info"
            type="button"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            className="content__button button is-primary is-outlined"
            type="button"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            className="content__button button is-success"
            type="button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
