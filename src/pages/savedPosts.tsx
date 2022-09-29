import React from 'react'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Post } from '../App'
import './savedPosts.css'

type Props = {
    savedPosts: Post[]
    setSavedPosts: (savedPosts: Post[]) => void
    setPosts: (posts: Post[]) => void
    saved: boolean
}

export default function savedPosts( { savedPosts, setPosts, setSavedPosts, saved }: Props) {
  return (
    <main className='main'>
        <h1>Saved Posts</h1>
        {savedPosts ? savedPosts.map((post) => (
            <div className="single-post">
            <div key={post.id}>
              <div className="post-content">
                <img src={post.image} alt={post.title} className="image" />
                <div className="post-content-text">
                  <h3>
                    <b>Title: </b> {post.title}
                  </h3>
                  <h3>
                    <b>Price: </b> {post.price}$
                  </h3>
                  {post.tags.map((tag) => (
                    <div key={tag.id}>
                      <h3>
                        <b>Category: </b> {tag.name}
                      </h3>
                    </div>
                  ))}
                  <Link to={`/posts/${post.id}`}>
                    <button className="details-button">More details...</button>
                  </Link>
                </div>
                <button
                  onClick={() => {
                    return fetch(`http://localhost:4000/posts/${post.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        saved: !post.saved,
                      }),
                    })
                      .then(() => {
                        return fetch(`http://localhost:4000/posts`)
                          .then((resp) => resp.json())
                          .then((postsFromServer) => setPosts(postsFromServer));
                      })
                      .then(() => {
                        return fetch("http://localhost:4000/savedPosts")
                          .then((resp) => resp.json())
                          .then((savedPostsFromServer) =>
                            setSavedPosts(savedPostsFromServer)
                          );
                      });
                  }}
                  className="saved-button"
                >
                  {saved ? <BsFillBookmarkFill className="saved-btn"/> : <BsBookmark />}
                </button>
              </div>
            </div>
          </div>
        )) : <h1 className='no-saved-posts'>No saved posts for you my friend!</h1>}
    </main>
  )
}
