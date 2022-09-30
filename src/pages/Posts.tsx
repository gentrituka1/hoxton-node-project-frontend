import { useEffect, useState } from "react";
import { BsBookmark, BsFillBookmarkFill, BsTags } from "react-icons/bs";
import { Link } from "react-router-dom";
import { User } from "../App";
import ItemRow from "../components/ItemRow";
import "./Posts.css";

type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
  price: number;
  saved: boolean;
  toSell: boolean;
  toBuy: boolean;
  userId: number;
  tags: Tag[];
};

type Tag = {
  id: number;
  name: string;
  posts: Post[];
};

type Props = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  currentUser: User
};

export default function Posts({currentUser, posts, setPosts }: Props) {
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);
  const [saved, setSaved] = useState<boolean>(false);

  return (
    <div className="main">
      <div className="posts-div">
        {posts.slice(0).reverse().map((post) => (
          <ItemRow currentUser={currentUser} post={post} setPosts={setPosts}/>
        ))}
      </div>
    </div>
  );
}
