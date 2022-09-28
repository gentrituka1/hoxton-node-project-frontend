import { useEffect, useState } from "react";
import { BsTag } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Post } from "../App";
import "./PostsDetails.css";

export function PostsDetails() {
  const [post, setPost] = useState<Post | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${params.id}`)
      .then((resp) => resp.json())
      .then((postFromServer) => setPost(postFromServer));
  }, []);

  if (post === null) return <h1>Just a sec... 🙏</h1>;

  return (
    <section className="post-details">
      <img src={post.image} alt={post.title} width="400px" />
      <div className="post-detail-side">
        <h3></h3>
        <u>
          <h2>
            Title:
            {post.title}
          </h2>
        </u>
        <p>
          <b>Description: </b>
          {post.content}
        </p>
        <p>
          <u>
            <b>Pirce:</b>
          </u>
          {post.price} $
        </p>
        <Link to={"/posts"}>
          <button className="back-button">Go Back</button>
        </Link>
      </div>
    </section>
  );
}
