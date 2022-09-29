import React, { useState } from 'react'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Post } from '../App';

type Props = {
    post: Post
    setPosts: (posts: Post[]) => void
    setSavedPosts: (savedPosts: Post[]) => void
}

export default function ItemRow( { post, setPosts, setSavedPosts }: Props) {

  return (
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
                    Promise.all([
                      fetch(`http://localhost:4000/posts/${post.id}`, {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          saved: !post.saved,
                        }),
                      }),
                      fetch(`http://localhost:4000/posts`)
                        .then((resp) => resp.json())
                        .then((postsFromServer) => setPosts(postsFromServer)),
                      fetch("http://localhost:4000/savedPosts")
                        .then((resp) => resp.json())
                        .then((savedPostsFromServer) =>
                          setSavedPosts(savedPostsFromServer)
                        )
                    ])
                  }}
                  className="saved-button"
                >
                  {post.saved ? <BsFillBookmarkFill className="saved-btn"/> : <BsBookmark />}
                </button>
              </div>
            </div>
          </div>
  )
}
