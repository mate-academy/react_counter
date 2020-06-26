import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.getElementById('increase')
      .addEventListener('click', this.onBtnClick);
  }

  onBtnClick = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          id="increase"
          type="button"
          style={{
            fontSize: '24px', cursor: 'pointer',
          }}
        >
          Increase!
        </button>
      </>
    );
  }
}

export { Counter };
