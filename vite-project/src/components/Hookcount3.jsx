import React, { useState } from 'react'

function Hookcount3() {
    const [name, setName] = useState ({firstName : '' , lastname : ''})
  return (
    <div>
      <input type="text" value={name.firstName} onChange = { e => setName({...name ,firstName : e.target.value})} />
      <input type="text" value={name.lastname} onChange = { e=> setName({...name,lastname:e.target.value})} />
      <h2>First name is - {name.firstName}</h2>
      <h2>last name is - {name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default Hookcount3
