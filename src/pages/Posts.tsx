import { useEffect, useState } from "react";
import { BsBookmark, BsFillBookmarkFill, BsTags } from "react-icons/bs";
import { Link } from "react-router-dom";
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
  searchValue: string;
};

export default function Posts({ posts, setPosts, searchValue }: Props) {
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);
  

  return (
    <div className="main-div">
      <div className="posts-div">
        {posts.map((post) => (
          <ItemRow post={post}  setPosts={setPosts} setSavedPosts={setSavedPosts}  />
        ))}
      </div>
    </div>
  );
}
