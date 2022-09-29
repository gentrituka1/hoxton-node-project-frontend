import { useNavigate } from "react-router-dom";
import { Post, User } from "../App";
import "./createPost.css";

type Props = {
  currentUser: User;
  setPosts: (posts: Post[]) => void;
};

export default function createPost({ currentUser, setPosts }: Props) {

  let navigate = useNavigate();

  return (
    <main className="main">
      <div className="create-post">
        <h1>CREATE A POST</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (event.target.action.value === "To Buy") {
              const newPost = {
                title: event.target.title.value,
                image: event.target.image.value,
                content: event.target.content.value,
                tags: [event.target.tags.value],
                price: event.target.price.value,
                toBuy: true,
                toSell: false,
                userId: currentUser.id
              };
              fetch("http://localhost:4000/posts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
              }).then(() => {
                fetch("http://localhost:4000/posts")
                  .then((resp) => resp.json())
                  .then((posts) => {
                    setPosts(posts);
                  });
              });
            } else if (event.target.action.value === "To Sell") {
              const newPost = {
                title: event.target.title.value,
                image: event.target.image.value,
                content: event.target.content.value,
                tags: [event.target.tags.value],
                price: event.target.price.value,
                toBuy: false,
                toSell: true,
                userId: currentUser.id
              };
              return fetch("http://localhost:4000/posts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
              }).then(() => {
                return fetch("http://localhost:4000/posts")
                  .then((resp) => resp.json())
                  .then((posts) => {
                    setPosts(posts);
                  });
              })
            }
            navigate("/posts");
          }}
        >
          <fieldset className="buy-sell">
            <legend>What are you looking for?</legend>
            <label>
              To Buy
              <input type="radio" name="action" value="To Buy" />
            </label>
            <label>
              To Sell
              <input type="radio" name="action" value="To Sell" />{" "}
            </label>
          </fieldset>
          <label>Categories <input type="text" name="tags"/></label>
          <label>
            <span>Title</span>
            <input name="title" type="text" required />
          </label>
          <label>
            <span>Description</span> <textarea name="content" />
          </label>
          <label>
            <span>Price</span>
            <input name="price" type="number" required /> EUR
          </label>
          <label>
            <span>Image</span>
            <input name="image" type="url" />
          </label>
          <label>
            <input type="checkbox" required />
            <span>
              Yes, I approve the management of personal data by MerrJep. The
              recorded data will be collected and processed only for the
              aforementioned purposes.
            </span>
          </label>
          <label>
            <input type="checkbox" required />
            <span>
              Yes, I agree to the terms and conditions of MerrJep.com. Read more
              details about Personal Data Processing Rights in the Privacy
              Policy section of the MerrJep.com website.
            </span>
          </label>
          <button>Submit Post</button>
        </form>
      </div>
    </main>
  );
}
