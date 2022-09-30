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
        <h1 className="create-h1">CREATE A POST</h1>
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
                userId: currentUser.id,
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
                userId: currentUser.id,
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
              });
            }
            navigate("/posts");
          }}
        >
          <fieldset className="buy-sell">
            <legend className="legend">What are you looking for?</legend>
            <label>
              <p className="create-a-post-label">To Buy</p>
              <input type="radio" name="action" value="To Buy" />
            </label>
            <label>
              <p className="create-a-post-label">To Sell</p>
              <input type="radio" name="action" value="To Sell" />{" "}
            </label>
          </fieldset>
          <label>
            <p className="create-a-post-label">Categories:</p>{" "}
            <input type="text" name="tags" className="create-post-input1" />
          </label>
          <label>
            <p className="create-a-post-label">Title:</p>
            <input
              name="title"
              type="text"
              className="create-post-input2"
              required
            />
          </label>
          <label>
            <p className="create-a-post-label">Description:</p>{" "}
            <textarea name="content" className="create-post-textarea" />
          </label>
          <label>
            <p className="create-a-post-label">Price:</p>
            <input
              name="price"
              type="number"
              className="create-post-input3"
              required
            />
            <p className="create-a-post-label">€</p>
          </label>
          <label>
            <p className="create-a-post-label">Image:</p>
            <input name="image" type="url" className="create-post-input4" />
          </label>
          <label>
            <input type="checkbox" required />
            <p className="create-a-post-label">
              Yes, I approve the management of personal data by MerrJep. The
              recorded data will be collected and processed only for the
              aforementioned purposes.
            </p>
          </label>
          <label>
            <input type="checkbox" required />
            <p className="create-a-post-label">
              Yes, I agree to the terms and conditions of MerrJep.com. Read more
              details about Personal Data Processing Rights in the Privacy
              Policy section of the MerrJep.com website.
            </p>
          </label>
          <button className="create-post-btn">Submit Post</button>
        </form>
      </div>
    </main>
  );
}
