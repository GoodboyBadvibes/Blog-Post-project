import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <>
     <div class="posts">
     <Link to="Read">
    <div class="post">
      <div class="head">
        <div>
          <h2>Tech in 2022</h2>
         <em>by Omar Apollo</em>
        </div>
        <button>
          <span class="delete"><i className="ri-delete-bin-2-fill"></i></span>
        </button>
      </div>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente non modi dolor doloremque fugit, quis nemo blanditiis dolorem reiciendis dolorum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid harum excepturi ipsum illo quas vero nam voluptatem reprehenderit autem.</h5>
      <button class="readBtn"> <p>Read more</p></button>
    </div>
    </Link>
    <Link to="Unavailable">
    <div class="post">
      <div class="head">
        <div>
          <h2>The New Crypto</h2>
          <em>by Olly Alexander</em>
        </div>
        <button>
          <span class="delete"><i className="ri-delete-bin-2-fill"></i></span>
        </button>
      </div>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente non modi dolor doloremque fugit, quis nemo blanditiis dolorem reiciendis dolorum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid harum excepturi ipsum illo quas vero nam voluptatem reprehenderit autem.</h5>
      <button class="readBtn"> <p>Read more</p></button>
    </div>
    </Link>
    <Link to="Unavailable">
    <div class="post">
      <div class="head">
        <div>
          <h2>Web3 and Blockchain Tech</h2>
          <em>by Montero Hill</em>
        </div>
        <button>
          <span class="delete"><i className="ri-delete-bin-2-fill"></i></span>
        </button>
      </div>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente non modi dolor doloremque fugit, quis nemo blanditiis dolorem reiciendis dolorum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid harum excepturi ipsum illo quas vero nam voluptatem reprehenderit autem.</h5>
      <button class="readBtn"> <p>Read more</p></button>
    </div>
    </Link>
    <Link to="Unavailable">
    <div class="post">
      <div class="head">
        <div>
          <h2>Advancing Telecommunication</h2>
          <em>by Keiynan Lonsdale</em>
        </div>
        <button>
          <span class="delete"><i className="ri-delete-bin-2-fill"></i></span>
        </button>
      </div>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente non modi dolor doloremque fugit, quis nemo blanditiis dolorem reiciendis dolorum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid harum excepturi ipsum illo quas vero nam voluptatem reprehenderit autem.</h5>
      <button class="readBtn"> <p>Read more</p></button>
    </div>
    </Link>
    <Link to="Unavailable">
    <div class="post">
      <div class="head">
        <div>
          <h2>Kid Inventors Of 2022</h2>
          <em>by Billy Porter</em>
        </div>
        <button>
          <span class="delete"><i className="ri-delete-bin-2-fill"></i></span>
        </button>
      </div>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente non modi dolor doloremque fugit, quis nemo blanditiis dolorem reiciendis dolorum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid harum excepturi ipsum illo quas vero nam voluptatem reprehenderit autem.</h5>
      <button class="readBtn"> <p>Read more</p></button>
    </div>
    </Link>
    
  </div>
    </>
  )
}

export default Post