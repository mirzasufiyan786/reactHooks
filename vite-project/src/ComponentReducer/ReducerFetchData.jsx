import React, { useReducer,useEffect } from 'react'
import axios from 'axios'
const initialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action) => {
switch(action.type){
    case 'FETCH_SUCCESS':
        return{
            loading: false,
            post:action.payLoad,
            error:''
        }
        case 'FETCH_ERROR':
            return{
                loading: false,
                post:{},
                error:'Some thing went wrong'
            }
            default:
                return state
}

}

function ReducerFetchData() {
    const [state,dispatch] =useReducer(reducer,initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
          dispatch({type : 'FETCH_SUCCESS' , payLoad : response.data})
        })
        .catch(error=>{
            dispatch({type : 'FETCH_ERROR' })
        })
        }, [])

  return (
    <h1>
      {state.loading ?  'Loading...' : state.post.title }
      {
        state.error ? state.error : null
      }
    </h1>
  )
}

export default ReducerFetchData
