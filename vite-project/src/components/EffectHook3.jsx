import React, { useState , useEffect} from 'react'
import EffectHook2 from './EffectHook2'

function EffectHook3() {
    const [display, setDisplay] = useState(true)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMouseposition = e => {
setX(e.clientX)
setY(e.clientY)
    }
    useEffect(() => {
    window.addEventListener('mousemove', logMouseposition)

    return ()=> {
        window.removeEventListener('mousemove', logMouseposition)
    }
    }, [])
  return (
    <>
    <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
    {display && <EffectHook2/>}
    </>
  )
}

export default EffectHook3
