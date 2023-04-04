// import Counter from "./Components/Counter";
// import Selector from "./Components/Selector";
// import MyClock from "./Components/MyClock";
import Car from "./Components/Car";
import React from 'react';
// import Timer from './Components/Timer';

// function App() {
//   return (
//     <div className="App">
//       <Timer />
//     </div>
//   );
// }

// import "./App.css";

// function App() {
//   return (
//     <div class="Container">
//       <MyClock />
//     </div>
//   );
// }
function App() {
  return (
    <div class="Container">
      <Car />
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// function App() {
//   return <Counter />;
// }
// function App() {
//   return <Selector />;
// }
// export default App;
// import React from 'react';

// function useCounter(initialCount) {
//   const [count, setCount] = React.useState(initialCount);

//   function increment() {
//     setCount(count + 1);
//   }

//   return [count, increment];
// }

// function Counter1() {
//   const [count, increment] = useCounter(0);

//   return (
//     <div>
//       <h1>Counter 1: {count}</h1>
//       <button onClick={increment}>Add 1</button>
//     </div>
//   );
// }

// function Counter2() {
//   const [count, increment] = useCounter(0);

//   return (
//     <div>
//       <h1>Counter 2: {count}</h1>
//       <button onClick={() => increment()}>Add 2</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Counter1 />
//       <Counter2 />
//     </div>
//   );
// }

export default App;
