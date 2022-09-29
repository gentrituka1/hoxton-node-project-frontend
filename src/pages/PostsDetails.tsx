import { useEffect, useState } from "react";
import { BsTag } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Post, User } from "../App";
import "./PostsDetails.css";

export function PostsDetails() {
  const [post, setPost] = useState<Post | null>(null);
  const params = useParams();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

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
            <b>Price:</b>
          </u>
          <span> {post.price}$</span>
        </p>
        <Link to={"/posts"}>
          <button className="back-button">Go Back</button>
        </Link>
        {users
          .filter((user) => user.id === post.userId)
          .map((user) => (
            <>
              <div className="user-info">
                <p className="username">
                  <b>Name: </b>
                  {user.name}
                </p>
                <p className="username">
                  <b>Email: </b>
                  {user.email}
                </p>
                <p className="username">
                  <b>Phone Number: </b>
                  {user.phoneNumber}
                </p>
              </div>
            </>
          ))}
      </div>
    </section>
  );
}
