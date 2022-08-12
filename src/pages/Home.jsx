import React,{useEffect,useState}  from 'react'
import Post from '../components/Post'
import { Link } from 'react-router-dom'

const Home = () => {

  const [blogs,setBlogs] = useState([])

  useEffect(() => {
    getBlogPosts()
  },[])

  async function getBlogPosts(){
    const response = await fetch('http://192.168.99.244:5000/')
    const data = await response.json()
    
    setBlogs(data)
    console.log(data)
}

console.log(blogs)
  return (
  
    <div className="posts">
    {  
      blogs && blogs.map((blog)=> (
    //     <div>
    //       <div className="posts">
    //  <Link to="/read"/>
    // <div className="post">
    //   <div className="head">
    //     <div>
    //       <h2>{blog.title}</h2>
    //      <em>{blog.author}</em>
    //      <p>created at {blog.createdAt}</p>
    //     </div>
    //     <button>
    //       <span className="delete"><i className="ri-delete-bin-2-fill"></i></span>
    //     </button>
    //   </div>
    //   <h5>{blog.blogpost}</h5>
    //   <button className="readBtn"> <p>Read more</p></button>
    // </div>
    // </div>
    //     </div>
    
      <Post blog = {blog}/>
    
    
    
      ))
    }
    </div>
      
     
    
  )
}

export default Home