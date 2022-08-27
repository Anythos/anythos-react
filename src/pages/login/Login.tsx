import React, { useState } from "react";

export function Login() {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    /* fetch("http://localhost:8080/anythos/admin/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });*/

    fetch("http://localhost:8080/anythos/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => {
      if (res.ok) {
        setToken(res.headers.get("Authorization") ?? "");
        setError(false);
        return;
      }
      setError(true);
    });
  };

  function handleUpdateUsername(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setUsername(e.target.value);
  }

  function handleUpdatePassword(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="login">Login</label>
        <input
          id="login"
          type="text"
          className="text"
          onChange={(e) => handleUpdateUsername(e)}
        />

        <label htmlFor="password">Hasło</label>
        <input
          id="password"
          type="text"
          onChange={(e) => handleUpdatePassword(e)}
        />
        <input type="submit" onClick={(e) => handleSubmit(e)} />
      </form>

      {error && "Errrror!"}
      {token && "Zalogowano!"}
    </div>
  );
}
