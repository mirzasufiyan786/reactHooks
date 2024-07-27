import React from 'react'
import useCountHook from '../Hooks/useCountHook'
function CountCustomtwo() {
  const [count,increment,decrement,reset] = useCountHook(10,10)
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CountCustomtwo