import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import Login from "./Components/Login";
import Main from "./Components/Main";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import Apply from "./Components/Apply";
import Regisnow from "./Components/Regisnow";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/registernow" element={<Regisnow />} />
      </Routes>
      <Apply />
      <Footer />
    </Router>
  );
}

export default App;
