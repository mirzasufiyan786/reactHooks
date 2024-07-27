import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const incrimentOne = () => {
        setCountOne(countOne + 1)
    }
    const incrimentTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])
    return (
        <>
            <h2>
                <button onClick={incrimentOne}>IncrimentOne - {countOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </h2>
            <h2>
                <button onClick={incrimentTwo}>IncrimentTwo - {countTwo}</button>
            </h2>
        </>
    )
}

export default UseMemo
