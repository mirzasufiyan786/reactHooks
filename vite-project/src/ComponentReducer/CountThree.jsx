// Multiply use reducer with same transition logic---

import React, { useReducer } from 'react'

const InitialState = 0
const reducer=(state,action)=>{
switch(action){
case 'incriment' : return state +1
case 'decrement' : return state -1
case 'reset' : return InitialState
default: return state
}
}
function CountThree() {
  const [count,dispatch] =   useReducer(reducer,InitialState)
  const [countTwo,dispatchTwo] =   useReducer(reducer,InitialState)
  return (
    <div>
        <h1>Count - {count}</h1>
      <button onClick={() => dispatch('incriment')}>Incriment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <div> <div>
        <h1>Count - {count}</h1>
      <button onClick={() => dispatchTwo('incriment')}>Incriment</button>
      <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
      <button onClick={()=>dispatchTwo('reset')}>Reset</button>
    </div></div>
    </div>
  )
}

export default CountThree
