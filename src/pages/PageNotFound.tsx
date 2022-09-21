import React from "react";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="container h-screen justify-center max-w-full bg-gradient-to-b from-teal-100 to-rose-100">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-bold lg:text-9xl text-primary-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
            Page not found.
          </p>
          <p className="mb-6 mt-7 text-lg font-normal">
            The page you are looking for doesn't exist or might have been
            removed.
          </p>
          <button
            type="button"
            className="mt-7 px-7 inline py-2 text-base font-medium leading-5 shadow text-white border border-transparent rounded-lg
                        focus:outline-none focus:shadow-outline-blue bg-indigo-600 active:bg-indigo-700 hover:bg-indigo-700"
          >
            <Link to="/Home" /> Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
