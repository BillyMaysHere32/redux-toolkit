import './App.css';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from './redux/counter';

function App() {
  // read specific variable from specific reducer
  // const count = useSelector((state) => state.counter.count);
  const { count } = useSelector((state) => state.counter);
  
  // set up dispatch hook to call action
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* pass in payload (33) */}
      <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
}

export default App;
