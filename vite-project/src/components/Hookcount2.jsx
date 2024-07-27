import React, { useState } from 'react'

function Hookcount2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const IncrementBy5 = () => {
        for (let i = 0; i <5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div>
            count: {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Inc++</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>dec--</button>
            <button onClick={() => setCount(initialCount)}>reset</button>
            <button onClick={IncrementBy5}>inc by 5</button>
        </div>
    )
}

export default Hookcount2
