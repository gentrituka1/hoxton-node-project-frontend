import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../App";
import "./Signup.css";

type Props = {
  signIn: (data: any) => void;
};

export default function Signup({ signIn }: Props) {
  let navigate = useNavigate();

  return (
    <main className="main">
      <h1 className="signup-h1">CREATE YOUR ACCOUNT</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            phoneNumber: e.target.phoneNumber.value,
          };

          fetch("http://localhost:4000/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.error) {
                alert(data.error);
              } else {
                signIn(data);
              }
            });
        }}
      >
        <label>
          <p className="signup-name">Name </p>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            className="signup-input"
            required
          />
        </label>
        <label>
          <p className="signup-name">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="signup-input"
            required
          />
        </label>
        <label>
          <p className="signup-name">Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="login-input"
            required
          />
        </label>
        <label>
          <p className="signup-name">Phone Number</p>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number..."
            className="signup-input"
          />
        </label>
        <button className="signup-btn">Signup</button>
      </form>
    </main>
  );
}
