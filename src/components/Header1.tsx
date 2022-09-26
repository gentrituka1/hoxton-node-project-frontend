import { MdOutlineInsertComment } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useState } from "react";
import { User } from "../App";
import './Header1.css'

type Props = {
  currentUser: User | null;
};

export default function Header1({ currentUser }: Props) {
  return (
    <header className="header-1">
      <div className="header-1-icons">
        <MdOutlineInsertComment className="comment"/>
        <AiOutlineHeart className="heart"/>
        <div className="bag">
          <BsBag />
          <p>{currentUser === null ? null : currentUser.itemsInBag}</p>
        </div>
      </div>
      {currentUser ? (
        <div className="header-1-user">
          <p>{currentUser.name}</p>
          <div className="header-1-user-image">
            {currentUser.name.charAt(0)}
          </div>
        </div>
      ) : (
        <div className="header-1-signin-sigup">
          <button>SignIn</button>
          <button>SignUp</button>
        </div>
      )}
    </header>
  );
}
