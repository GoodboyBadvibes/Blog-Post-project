import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [blogpost,setBlogPost] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  async function handleFormSubmit (e){
     e.preventDefault()
     const blogPostData = {title, author, blogpost}
     console.log(blogPostData)

        const response = await fetch('http://172.16.5.79:5000/postblog',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(blogPostData)

        })
        if(response.ok){
          navigate('/')
        }else{
          setError("Error occured")
          setTimeout(() => {
            setError("")
          },2000)
        }
        console.log(response)
  }

  return (
    <>
     <form className="createBody" onSubmit={handleFormSubmit}>
      {error && <p>{error}</p>}
    <label for="title">Title</label><br/>
    <input onChange={(e)=>setTitle(e.target.value)} value={title}  type="text" placeholder="Title" name="title" required/> <br/>
    <label for="post">New Post</label><br/>
    <input onChange={(e)=>setAuthor(e.target.value)} value={author} type="text" className="textArea" placeholder="Type post here..." name="post" required/><br/>
    <label for="author">Author</label><br/>
    <input onChange={(e)=>setBlogPost(e.target.value)} value={blogpost} type="text" placeholder="Who wrote this article?" name="author" required /> <br/>
    <input type="submit" value="post"/>
  </form>
    </>
  )
}

export default Create