import React, { createContext, useState,useReducer } from 'react'
import './App.css'
import Hookcount from './components/Hookcount'
import Hookcount2 from './components/Hookcount2'
import Hookcount3 from './components/Hookcount3'
import Hookcount4 from './components/Hookcount4'
import EffectHook1 from './components/EffectHook1'
import EffectHook2 from './components/EffectHook2'
import EffectHook3 from './components/EffectHook3'
import EffectHook4 from './components/EffectHook4'
import EffectDataFetch from './components/EffectDataFetch'
import EffectFetch from './EffectFetch'
import ComponentA from './componentContext.jsx/ComponentA'
import CountOne from './ComponentReducer/CountOne'
import CounterTwo from './ComponentReducer/CounterTwo'
import CountThree from './ComponentReducer/CountThree'
import ComponentRA from './ComponentReducer/ComponentRA'
import ComponentRB from './ComponentReducer/ComponentRB'
import ComponentRC from './ComponentReducer/ComponentRC'
import Fetchdataloading from './components/Fetchdataloading'
import ReducerFetchData from './ComponentReducer/ReducerFetchData'
import UseMemo from './ComponentReducer/UseMemo'
import UseRef from './componentRef/UseRef'
import DocTitleOne from './ComponentsCustomHooks/DocTitleOne'
import DocTitleTwo from './ComponentsCustomHooks/DocTitleTwo'
import CountCustom from './ComponentsCustomHooks/CountCustom'
import CountCustomtwo from './ComponentsCustomHooks/CountCustomtwo'
import UserInput from './ComponentsCustomHooks/UserInput'



export const UserContext = createContext()
export const ChanelContext = createContext()

// ---------reducer with context start------
export const CountContext = React.createContext()
const InitialState = 0
const reducer=(state,action)=>{
switch(action){
case 'incriment' : return state +1
case 'decrement' : return state -1
case 'reset' : return InitialState
default: return state
}
}
// ---------reducer with context end------
function App() {
  // const [count,dispatch] =   useReducer(reducer,InitialState) for reducer with context

  return (
    <>
                        {/* -----------------Use State--------------- */}
      {/* <Hookcount/> */}
      {/* <Hookcount2/> */}
      {/* <Hookcount3/> */}
      {/* <Hookcount4/> */}


                         {/* -----------------Use Effect----------------- */}
      {/* <EffectHook1/>  */}
      {/* <EffectHook2/> */}
      {/* <EffectHook3/> */}
      {/* <EffectHook4/> */}
      {/* <EffectDataFetch/> */}
      {/* <EffectFetch/> */}


                         {/* -----------Use Context------------------ */}
      {/* <UserContext.Provider value={'MIRZA'}>
        <ChanelContext.Provider value={'YOUTUBE'}>
          <ComponentA />

        </ChanelContext.Provider>
      </UserContext.Provider> */}
                                     {/* ----------Use Context End------- */}


                  {/* -------Use Reducer--------- */}

      {/* <CountOne/> */}
      {/* <CounterTwo/> */}
      {/* <CountThree/> */}
      {/* // ---------reducer with context start------ */}
      {/* <CountContext.Provider value={{countState:count , countDispatch:dispatch}}>
      <h1>Count- {count}</h1>
<ComponentRA/>
<ComponentRB/>
<ComponentRC/>
</CountContext.Provider> */}
      {/* // ---------reducer with context end------ */}
      {/* <Fetchdataloading/> using usestate */}
      {/* <ReducerFetchData/> */}

      {/* ------------Use Memo-------- */}
{/* <UseMemo/> */}

                  {/* ----------Use Ref------------ */}
  {/* <UseRef/> */}

                {/* ---------Custom Hooks----------- */}
  {/* <DocTitleOne/>
  <DocTitleTwo/> */}

{/* <CountCustom/>
<CountCustomtwo/> */}

<UserInput/>

  
    </>
  )
}

export default App
