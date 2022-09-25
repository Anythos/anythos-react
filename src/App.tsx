import React from "react";
import { Login } from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { PageNotFound } from "./pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // TODO:implement Provider once store is configured
    <BrowserRouter>
      <Routes>
        <Route path="/side" element={<Sidebar />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
