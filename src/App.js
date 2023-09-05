import React from "react";
import { Suspense } from "react";
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
import Internypay from "./Components/Internypay";
import Loader from "./Components/Loader";
import Textarea from "./Components/Textarea";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
          <Route path="/registernow" element={<Regisnow />} />
          <Route path="/internypay" element={<Internypay />} />
          <Route path="/textarea" element={<Textarea />} />
        </Routes>
        <Apply />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
