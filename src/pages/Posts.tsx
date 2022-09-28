import { useEffect, useState } from "react";
import { BsFillBookmarkFill, BsTags } from "react-icons/bs";
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
          <div className="single-post">
            <div key={post.id}>
              <div className="post-content">
                <img src={post.image} alt={post.title} className="image" />
                <div className="post-content-text">
                  <h3>
                    <b>Title: </b> {post.title}
                  </h3>
                  <h3>
                    <b>Description: </b> {post.content}
                  </h3>
                  <h3>
                    <b>Price: </b> {post.price}$
                  </h3>
                  {post.tags.map((tag) => (
                    <div key={tag.id}>
                      <h3>
                        <b>Category: </b> {tag.name}
                      </h3>
                    </div>
                  ))}
                  <p>
                    <b>Save Post: </b>
                    <button className="save-button">
                      <BsFillBookmarkFill />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
