// fetch daat using button--
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EffectFetch() {
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)
    const [posts, setPosts] = useState({})
    const handelclick = () => {
        setIdFromButton(id)
    }

    useEffect(() => {

        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(resp => {
                setPosts(resp.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [idFromButton])
    return (
        <div>

            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handelclick}>Fetch Data</button>
            <div>{posts.title}</div>

        </div>
    )
}

export default EffectFetch
