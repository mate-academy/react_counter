import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ count: prevState.count + 100 }));
  };

  increase = () => this.setState((prevState) => {
    if (prevState.count % 5 === 0 && prevState.count !== 0) {
      this.add100();
    }

    this.addOne();
  });

  render() {
    return (
      <article className="notification is-success has-text-centered">
        <div className="content">
          <h1 className="title is-1">
            {`Count: ${this.state.count}`}
          </h1>
          <div className="buttons has-addons is-centered">
            <button
              className="button is-primary is-light"
              type="button"
              onClick={this.addOne}
            >
              Add 1
            </button>
            <button
              className="button is-link is-light"
              type="button"
              onClick={this.add100}
            >
              Add 100
            </button>
            <button
              className="button is-info is-light"
              type="button"
              onClick={this.increase}
            >
              Increase
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default App;
