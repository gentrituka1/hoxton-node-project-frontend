import { useEffect, useState } from "react";
import { BsTags } from "react-icons/bs";
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

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);

  return (
    <div className="main-div">
      <div className="posts-div">
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.title} className="image" />
            <h3>{post.content}</h3>
            <h3>{post.price}$</h3>
              {post.tags.map((tag) => (
                <div key={tag.id}>
                  <h3>Category: {tag.name}</h3>
                  <p>---------------------------------------------</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
