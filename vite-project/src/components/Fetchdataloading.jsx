import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Fetchdataloading() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        setLoading(false)
        setPost(response.data)
        setError('')
    })
    .catch(error=>{
        setLoading(false)
        setPost({})
        setError('Some thing went wrong')
    })
    }, [])
  return (
    <h1>
    {loading ? 'loading...' : post.title }
    {error ? error : null}
    </h1>
  )
}

export default Fetchdataloading
