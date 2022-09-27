import { MdOutlineInsertComment } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useState } from "react";
import { User } from "../App";
import "./Header1.css";
import { useNavigate } from "react-router-dom";

type Props = {
  currentUser: User;
  signOut: () => void;
};

export default function Header1({ currentUser, signOut }: Props) {
  let navigate = useNavigate();

  return (
    <header className="header-1">
      <div className="header-1-icons">
        <MdOutlineInsertComment className="comment" />
        <AiOutlineHeart className="heart" />
        <BsFillBookmarkFill className="bookmark" />
      </div>
      {currentUser ? (
        <div className="header-1-user">
          <p className="user-name">{currentUser.name.toUpperCase()}</p>
          <div className="header-1-user-image">
            <p>{currentUser.name.charAt(0).toUpperCase()}</p>
          </div>
        </div>
      ) : (
        <div className="header-1-signin-sigup">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="signin-button"
          >
            SignIn
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="signup-button"
          >
            SignUp
          </button>
        </div>
      )}
    </header>
  );
}
