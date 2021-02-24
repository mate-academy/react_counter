import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    value: 0,
  }

  addOne = () => {
    this.setState(prevState => (
      {
        value: prevState.value + 1,
      }
    ));
  };

  add100 = () => {
    this.setState(prevState => (
      {
        value: prevState.value + 100,
      }
    ));
  };

  render() {
    const { value } = this.state;

    return (

      <div className="container">
        <h1 className="header">
          React counter
        </h1>
        <h2>
          Count:
          {' '}
          {value}
        </h2>

        <button
          type="button"
          className="button"
          onClick={this.addOne}
        >
          Add one
        </button>

        <button
          type="button"
          className="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button"
          onClick={() => {
            if (value % 5 === 0) {
              this.add100();
            }

            this.addOne();
          }}
        >
          Combined addition
        </button>
      </div>
    );
  }
}

export default App;
