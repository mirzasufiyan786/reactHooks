import React,{useContext} from 'react'
import { UserContext, ChanelContext } from '../App'
function ComponentC() {
   const user = useContext(UserContext)
  const chanel =  useContext(ChanelContext)
  return (
    <div>
      <h1>{user} - {chanel}</h1>
    </div>
  )
}

export default ComponentC
