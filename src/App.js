import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import Login from "./Components/Login";
import Main from "./Components/Main";
import Content from "./Components/Content";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <About />
      <Footer />
    </Router>
  );
}

export default App;
