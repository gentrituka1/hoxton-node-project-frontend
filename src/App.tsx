import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header1 from "./components/Header1";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header2 from "./components/Header2";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";

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

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  let navigate = useNavigate();

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
        .then((result) => {
          if (result.error) {
            alert(result.error);
          } else {
            signIn(result.data);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <Header1 currentUser={currentUser ? currentUser : null} />
      <Header2 />
      <Routes>
        <Route index element={<Navigate to='/posts'/>} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/login' element={<Login signIn={signIn}  />} />
        <Route path='/signup' element={<Signup  signIn={signIn}/>} />
      </Routes>
    </div>
  );
}

export default App;
