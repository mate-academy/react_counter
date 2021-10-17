import React from 'react';
import './App.scss';

class App extends React.Component<{}, { year: number }> {
  state = {
    year: 0,
  };

  addOne = () => {
    this.setState((prevYear) => {
      return {
        year: prevYear.year + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevYear) => {
      return {
        year: prevYear.year + 100,
      };
    });
  };

  increase = () => {
    if (this.state.year % 5 === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    const { year } = this.state;

    return (
      <>
        <div className="yearCounter">
          <h1 className="count">
            Count:
            {' '}
            { year }
          </h1>
          <div className="yearBlock">
            <button onClick={this.addOne} type="button" className="yearBlock__button">
              Add 1
            </button>
            <button onClick={this.add100} type="button" className="yearBlock__button">
              Add 100
            </button>
            <button onClick={this.increase} type="button" className="yearBlock__button">
              Adding 1 or 100
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
