import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const intervalRef = useRef(null)
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        startInterval()
        
        return () => {
            clearInterval(intervalRef.current)
        }
        
    }, [timer])
    const startInterval=()=>{
        intervalRef.current = setInterval(() => {
            setTimer(timer + 1)
        }, 1000); 
    }
    
    const inputRef = useRef()
    const focus = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focus}>Focus on Input Field</button>
            <h3>
                timer - {timer}
                <span><button onClick={() => clearInterval(intervalRef.current)}>Stop interval</button>
                <button onClick={startInterval}>Satrt interval</button></span>
            </h3>
        </div>
    )
}

export default UseRef
