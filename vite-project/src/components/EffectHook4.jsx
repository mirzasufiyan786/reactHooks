// timer-
// prevCount || dependancies count add

import React, { useEffect, useState } from 'react'

function EffectHook4() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default EffectHook4
