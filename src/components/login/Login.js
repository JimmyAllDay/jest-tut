import React, { useState } from "react";
import Button from "../button/Button";
import axios from "axios";

import "./login.css";

export default function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <span>
        {user ? (
          <p className="logged-in-user">
            {user && `Logged in as: ${user.name}`}
          </p>
        ) : (
          <p className="logged-in-user">
            Enter mock username and password to login
          </p>
        )}
      </span>
      <div className="container">
        <h1 className="login-title">Jest RTL</h1>
        <input
          className="input text-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          loading={loading}
          label={"Go!"}
          disabled={!username || !password}
          handler={handleClick}
        />

        <span
          data-testid="error"
          className="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong!
        </span>
      </div>
    </>
  );
}
