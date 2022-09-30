import React, { SetStateAction, useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Post } from "../App";
import "./Header2.css";

type Props = {
  setPosts: React.Dispatch<SetStateAction<Post[]>>;
};

export default function Header2({ setPosts }: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const postTitle = form.search.value;
    if (postTitle) {
      fetch(`http://localhost:4000/posts/post/${postTitle}`)
        .then((resp) => resp.json())
        .then((postsFromServer) => setPosts(postsFromServer));
    } else {
      fetch("http://localhost:4000/posts")
        .then((resp) => resp.json())
        .then((postsFromServer) => setPosts(postsFromServer));
    }
  }
  return (
    <header className="header-2">
      <Link className="links" to="/savedPosts">
        <BsFillBookmarkFill className="bookmark" />
      </Link>

      <form onChange={(event) => handleSubmit(event)} className="search-form">
        <input type="text" placeholder="Search for posts..." name="search" />
      </form>

      <div className="header-2-pages">
        <Link to="/createPost">
          <button className="create-post-button">➕ CREATE A POST</button>
        </Link>
      </div>
    </header>
  );
}
