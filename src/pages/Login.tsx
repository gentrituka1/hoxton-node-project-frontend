import React from "react";
import "./Login.css";

type Props = {
  signIn: (data: any) => void;
};

export default function Login({ signIn }: Props) {
  return (
    <main className="main">
      <h1 className="login-h1">LOGIN TO YOUR ACCOUNT</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let user = {
            login: e.target.login.value,
            password: e.target.password.value,
          };
          fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
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
          <p className="account">Account Logins </p>
          <input
            type="text"
            name="login"
            placeholder="Email or name..."
            className="login-input"
          />
        </label>
        <label>
          <p className="account">Password </p>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="login-input"
          />
        </label>
        <button className="login-btn">Login</button>
      </form>
    </main>
  );
}
