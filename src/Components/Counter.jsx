import React from 'react';

class Counter extends React.Component {
    state = {
      counter: 0,
    }

    addOne = () => {
      // eslint-disable-next-line
        this.setState(({ counter }) => ({
        // eslint-disable-next-line
            counter: counter += 1,
      }));
    };

    add100 = () => {
      // eslint-disable-next-line
      this.setState(({ counter }) => ({
        // eslint-disable-next-line
        counter: counter += 100,
      }));
    };

    magicF = () => {
      this.setState(({ counter }) => {
        this.addOne();
        if (counter % 5 === 0) {
          this.add100();
        }

        return {};
      });
    };

    render() {
      const { counter } = this.state;

      return (
        <div>
          <h1>
            Count:
            {' '}
            {counter}
          </h1>
          <button type="button" onClick={this.addOne}>
            add 1
          </button>

          <button type="button" onClick={this.add100}>
            add 100
          </button>

          <button type="button" onClick={this.magicF}>
            Magic btn
          </button>
        </div>
      );
    }
}

export default Counter;
