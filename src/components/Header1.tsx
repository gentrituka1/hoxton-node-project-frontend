import { MdOutlineInsertComment } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag, BsFillBookmarkFill } from "react-icons/bs";
import { useState } from "react";
import { User } from "../App";
import "./Header1.css";

type Props = {
  currentUser: User | null;
};

export default function Header1({ currentUser }: Props) {
  return (
    <header className="header-1">
      <div className="header-1-icons">
        <MdOutlineInsertComment className="comment" />
        <AiOutlineHeart className="heart" />
        <BsFillBookmarkFill />
      </div>
      {currentUser ? (
        <div className="header-1-user">
          <p className="user-name">{currentUser.name}</p>
          <div className="header-1-user-image">
            {currentUser.name.charAt(0)}
          </div>
        </div>
      ) : (
        <div className="header-1-signin-sigup">
          <button className="signin-button">SignIn</button>
          <button className="signup-button">SignUp</button>
        </div>
      )}
    </header>
  );
}
