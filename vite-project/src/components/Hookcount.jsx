import React, { useState } from 'react'

function Hookcount() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <div>
      <button onClick={()=>setCount (count+1)}>Count {count}</button>
     </div>
    </div>
  )
}

export default Hookcount
