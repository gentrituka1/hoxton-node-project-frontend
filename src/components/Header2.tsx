import React from "react";
import "./Header2.css";

export default function Header2() {
  return (
    <header className="header-2">
      <img
        className="logo"
        src="https://www.merrjep.com/Content/Images/Kosovo/Kosovo.svg"
        alt="merrjep"
        width={350}
      />
      <div className="header-2-pages">
        <button className="posts-button">POSTS</button>
        <button className="create-post-button">+ CREATE A POST</button>
      </div>
    </header>
  );
}
