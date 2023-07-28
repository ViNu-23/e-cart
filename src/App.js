import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Main>
        <Navbar />
        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
