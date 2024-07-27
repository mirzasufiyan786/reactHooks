import React from 'react'
import useCountHook from '../Hooks/useCountHook'

function CountCustom() {
 const [count,increment,decrement,reset] = useCountHook(0,1)
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CountCustom
