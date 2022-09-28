import { useEffect, useState } from "react";
import "./App.css";
import Header1 from "./components/Header1";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header2 from "./components/Header2";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import { PostsDetails } from "./pages/PostsDetails";

export type User = {
  id: number;
  email: string;
  name: string;
  Password: string;
  phoneNumber: string;
  posts: Post[];
};

export type Post = {
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

export type Tag = {
  id: number;
  name: string;
  posts: Post[];
};

function App(searchValue: string) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);

  function signIn(data: any) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
    navigate("/posts");
  }

  function signOut() {
    setCurrentUser(null);
    navigate("/login");
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4000/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      {/* @ts-ignore */}
      <Header1
        currentUser={currentUser}
        signOut={signOut}
        setPosts={setPosts}
        posts={posts}
      />
      {currentUser ? <Header2 /> : null}
      <Routes>
        <Route index element={<Navigate to="/posts" />} />
        <Route path="/posts/:id" element={<PostsDetails />} />
        <Route
          path="/posts"
          element={
            <Posts
              setPosts={setPosts}
              posts={posts}
              searchValue={searchValue}
            />
          }
        />
        <Route path="/login" element={<Login signIn={signIn} />} />
        <Route path="/signup" element={<Signup signIn={signIn} />} />
      </Routes>
    </div>
  );
}

export default App;
