import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, log} from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const [number , setNumber ] = useState(counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  useEffect(()=>{
    setNumber(counter);
  },[counter])

  return (
    <div className="App">
      <h1>{number}</h1>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(log())}>{isLogged ? "Logout" : "Login" }</button>
      { isLogged ? <h3>Valuable information</h3> : '' }
    </div>
  );
}

export default App;
