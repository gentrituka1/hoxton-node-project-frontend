import { useEffect, useState } from "react";
import { BsTag } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Post } from "../App";

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
    <section className="post-detail main-wrapper">
      <img src={post.image} alt={post.title} />
      <div className="post-detail__side">
        <h3></h3>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.price}</p>
        <Link to={"/posts"}>
          <button>Go Back</button>
        </Link>
      </div>
    </section>
  );
}
