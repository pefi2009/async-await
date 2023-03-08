import React, { useEffect, useState } from 'react'

const App = () => {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      // convert the data to json
      const json = await data.json();
  
      // set state with the result
      setPosts(json);
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])
  
  return (
    <div>
     {posts.map(post =>(
      <div key={post.id}>{post.title}</div>
     ))}
    </div>
  )
}

export default App
