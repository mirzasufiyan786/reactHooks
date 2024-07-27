import React, { useEffect, useState } from 'react'

function EffectHook2() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMouseposition = e => {
setX(e.clientX)
setY(e.clientY)
    }
    useEffect(() => {
    window.addEventListener('mousemove', logMouseposition)
    }, [])
  return (
    <div>
      Hook - {x} - {y}
    </div>
  )
}

export default EffectHook2
