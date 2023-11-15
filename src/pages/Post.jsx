import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom' to print the id in url
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Post() {
    const { id } = useParams()
    const [posts, setPosts] = useState([]) 


    console.log(id) // {id: "1"} in console, with object. Get the id from the path
    // in the Route path=":id" in App.js

    //Can't use this for placing HTML in the page, need to use useState
   useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) // Promise {<pending>}
        console.log(data) // Data is unlocked
        setPosts(data)
    }
    fetchPost()   
   }, [])


  return (
    <div>
        {/* map over every single post */}
       {posts.map(post => <div>{post.id}</div>)}
    </div>
  )
}

export default Post