import React, { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Post } from "../App";
import "./Header2.css";

export default function Header2() {
  return (
    <header className="header-2">
      <Link className="links" to="/savedPosts">
        <BsFillBookmarkFill className="bookmark" />
      </Link>

      <div className="header-2-pages">
        <Link to="/createPost">
          <button className="create-post-button">➕ CREATE A POST</button>
        </Link>
      </div>
    </header>
  );
}
