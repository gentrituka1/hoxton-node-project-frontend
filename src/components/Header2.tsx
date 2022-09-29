import React, { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header2.css";

export default function Header2() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header className="header-2">
      
      <BsFillBookmarkFill className="bookmark" />
        <input onChange={(event) => {
          setSearchValue(event.target.value.toLowerCase())
        }} type="text" placeholder="Search for posts..." />
      <div className="header-2-pages">
        <Link to="/createPost"><button className="create-post-button">
          ➕ CREATE A POST
          </button>
        </Link>
      </div>
    </header>
  );
}
