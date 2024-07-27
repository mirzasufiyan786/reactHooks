import React, { useContext } from 'react'
import { CountContext } from '../App'
function ComponentA() {
  const countContext= useContext(CountContext)
  return (
    <div>
       ComponentA - {countContext.countState}
      <button onClick={() => countContext.countDispatch('incriment')}>Incriment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
  
    </div>
  )
}

export default ComponentA