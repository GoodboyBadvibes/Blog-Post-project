import React from 'react'

const Create = () => {
  return (
    <>
     <form className="createBody">
    <label for="title">Title</label><br/>
    <input type="text" placeholder="Title" name="title" required/> <br/>
    <label for="post">New Post</label><br/>
    <input type="text" className="textArea" placeholder="Type post here..." name="post" required/><br/>
    <label for="author">Author</label><br/>
    <input type="text" placeholder="Who wrote this article?" name="author" required /> <br/>
    <input type="submit" value="post"/>
  </form>
    </>
  )
}

export default Create