import { useEffect, useState } from "react";
import { BsBookmark, BsFillBookmarkFill, BsTags } from "react-icons/bs";
import { Link } from "react-router-dom";
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
  const [saved, setSaved] = useState<boolean>(false);

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
                    <b>Price: </b> {post.price}$
                  </h3>
                  {post.tags.map((tag) => (
                    <div key={tag.id}>
                      <h3>
                        <b>Category: </b> {tag.name}
                      </h3>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    fetch(`http://localhost:4000/posts/${post.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        saved: !post.saved,
                      }),
                    })
                      .then(() => {
                        fetch(`http://localhost:4000/posts`)
                          .then((resp) => resp.json())
                          .then((postsFromServer) => setPosts(postsFromServer));
                      })
                      .then(() => {
                        fetch("http://localhost:4000/savedPosts")
                          .then((resp) => resp.json())
                          .then((savedPostsFromServer) =>
                            setSavedPosts(savedPostsFromServer)
                          );
                      });
                    setSaved(!saved);
                  }}
                  className="saved-button"
                >
                  {saved ? <BsFillBookmarkFill /> : <BsBookmark />}
                </button>
                <Link to={`/posts/${post.id}`}>
                  <button>More details...</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
