import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

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
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {`${count}`}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;

// import React, { useState } from 'react';

// import './App.scss';

// function App() {
//   const [count, setCount] = useState(0);
//   const [click, setClick] = useState(0);

//   function increase() {
//     if (click % 5 === 0) {
//       setCount(count + 101);
//     } else {
//       setCount(count + 1);
//     }
//   }

//   return (
//     <>
//       <h1>
//         Count:
//         {count}
//       </h1>
//       <button
//         type="button"
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Add 1
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           setCount(count + 100);
//         }}
//       >
//         Add 100
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           setClick(click + 1);
//           increase();
//         }}
//       >
//         Increase
//       </button>
//     </>
//   );
// }

// export default App;
