import React, { useState } from "react";

export function Login() {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <div className="container h-screen justify-center max-w-full mx-auto py-24 px-6 bg-blue-100">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                  <span>
                    {" "}
                    By <span className="text-blue-500">@anythos</span>
                  </span>
                </div>
                <div className="text-center text-2xl sm:text-3xl font-bold">
                  Sign in
                </div>
                <form className="mt-8">
                  <div className="mx-auto max-w-lg">
                    <div className="py-2">
                      <span className="px-1 text-sm text-dark-700">
                        {" "}
                        Corporate Login{" "}
                      </span>
                      <input
                        id="login"
                        type="text"
                        placeholder=""
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                                                focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        onChange={(e) => handleUpdateUsername(e)}
                      />
                    </div>
                    <div className="py-2">
                      <span className="px-1 text-sm text-dark-700">
                        Password
                      </span>
                      <div className="relative">
                        <input
                          id="password"
                          type="password"
                          placeholder=""
                          className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                                                    focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          onChange={(e) => handleUpdatePassword(e)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <label className="block text-gray-500 my-4">
                        <a
                          href="#"
                          className="cursor-pointer tracking-tighter text-gray border-b-2 border-gray-200 hover:border-gray-400"
                        >
                          <span>Reset Password</span>
                        </a>
                      </label>
                    </div>
                    <button
                      className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                      onClick={(e) => handleSubmit(e)}
                    >
                      {" "}
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {error && (
              <div
                className="bg-blue-100 rounded-lg py-5 px-6 mb-3 text-red-600 items-center w-full"
                role="alert"
              >
                {" "}
                Wrong credentials! <p>Try again or contact IT Helpdesk.</p>
              </div>
            )}

            {/*{TODO:redirect to Dashboard}*/}
            {token && "Zalogowano!"}
          </div>
        </div>
      </div>
    </div>
  );
}
