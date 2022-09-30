import React, { useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Post } from "../App";
import { TiDelete } from "react-icons/ti";

type Props = {
  post: Post;
  setPosts: (posts: Post[]) => void;
};

export default function ItemRow({ post, setPosts }: Props) {
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
            {post.toSell ? (
              <>
                <h3>
                  <b>
                    <u>Item to sell</u>
                  </b>
                </h3>
              </>
            ) : (
              <>
                <h3>
                  <b>
                    <u>Item to buy</u>
                  </b>
                </h3>
              </>
            )}
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
              }).then(() => {
                return fetch(`http://localhost:4000/posts`)
                  .then((resp) => resp.json())
                  .then((postsFromServer) => setPosts(postsFromServer));
              });
            }}
            className="saved-button"
          >
            {post.saved ? (
              <BsFillBookmarkFill className="saved-btn" />
            ) : (
              <BsBookmark />
            )}
          </button>
          <button
            onClick={() => {
              return fetch(`http://localhost:4000/posts/${post.id}`, {
                method: "DELETE",
              }).then(() => {
                return fetch(`http://localhost:4000/posts`)
                  .then((resp) => resp.json())
                  .then((postsFromServer) => setPosts(postsFromServer));
              });
            }}
            className="delete-button"
          >
            <TiDelete className="delete-btn" />
          </button>
        </div>
      </div>
    </div>
  );
}
