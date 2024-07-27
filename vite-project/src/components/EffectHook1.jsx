
          // dependances useEffect

import React, { useEffect, useState } from 'react'

function EffectHook1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
    document.title= `You count ${count} times`
    },[count])

  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}  />
              <button onClick={()=>setCount(count +1)}>Count {count} times</button>
    </div>
  )
}

export default EffectHook1
