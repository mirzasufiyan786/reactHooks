import React, { useState } from 'react'
import useInput from '../Hooks/useInput'

function UserInput() {
    const [firstName, bindFirstname, resetFirstname] = useInput('')
    const [lasttName, bindLasttname, resetLasttname] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lasttName}`)
        resetFirstname()
        resetLasttname()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input
                        {...bindFirstname}
                        type="text" />
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input
                        {...bindLasttname}
                        type="text" />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserInput
