import React, {useEffect,useState} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom' 

const Read = () => {

  const navigate = useNavigate()

  const [post,setPost] = useState([])

  let {id} = useParams()
  console.log(id)

async function getBlog(){
      const response = await fetch (`http://192.168.99.244:5000/blog/${id}`)
      const data = await response.json()
      console.log(data)
      setPost(data)
} 

  useEffect(()=>{
    getBlog()
  },[])


  async function deletePost(){
    const response = await fetch (`http://192.168.99.244:5000/blog/${id}`,{
      method : 'DELETE'
    })
    console.log(response)
    if(response.ok){
      navigate('/')
    }else{
      // setError("Error occured")
      // setTimeout(() => {
      //   setError("")
      // },2000)
    }
  }

  return (
    <>
      (blog && (
        <div className="blogPost">
 <h1 className="title">{post.title}</h1>
 <h4 className="body">{post.blogpost}</h4>
  <div className="author">
    <h3>{post.author}</h3>
    <h6> at {post.createdAt}</h6>
  </div>
</div>
<button >
    <span onClick={deletePost} class="delete"><i className="ri-delete-bin-2-fill"></i></span>
  </button>
      ))
    </>
  )
}

export default Read