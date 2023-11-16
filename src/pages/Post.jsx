import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom' to print the id in url
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Post() {
  const { id } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true) // loading is true by default, as soon as this mounts its going to be loading


  console.log(id) // {id: "1"} in console, with object. Get the id from the path
  // in the Route path=":id" in App.js

  //Can't use this for placing HTML in the page, need to use useState
  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) // Promise {<pending>}
      console.log(data) // Data is unlocked
      setPosts(data)
      setLoading(false) //soon as it mounts its going to stop loading
    }
    fetchPost()
  }, [])


  return (
    <>
      <div className="post__search">
        <button>← Back</button>
        <div className="post__search--container">
          <label className="post__search--label">Search by Id</label>
          <input
            type="number"
          />
          <button>Enter</button>
        </div>
      </div>
      {loading
        ? new Array(10).fill(0).map((_, index) => (
          <div className="post" key={index}>
            <div className="post__title">
              <div className="post__title--skeleton"></div>
            </div>
            <div className="post__body">
              <p className="post__body--skeleton"></p>
            </div>
          </div>
        )) : (
          posts.map(post => (
            <div className="post" key={post.id}>
              <div className="post__title">{post.title}</div>
              <p className="post__body">{post.body}</p>
            </div>

          ))
        )}
    </>
  )
}

//21:47

export default Post