import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EffectDataFetch() {
    const [id, setId] = useState(1)
    const [posts, setPosts] = useState({})

    useEffect(() => {
    
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( resp => {
            setPosts(resp.data)
        })
        .catch ( err=> {
            console.log(err)
        })

    }, [id])
  return (
    <div>

        <input type="text" value={id} onChange={e => setId(e.target.value)} />
    <div>{posts.title}</div>
                  {/* ---------to fetch all data----------- */}
      {/* <ul>
        {
            posts.map(post =>(
                <li key={post.id}>{post.title}</li>
            ))
        }
      </ul> */}
    </div>
  )
}

export default EffectDataFetch
