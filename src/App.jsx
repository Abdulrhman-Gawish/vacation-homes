import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Home from "@pages/Home/Home";
import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";
import ScrollToTop from "@components/ScrollToTop";
import { AppWrapper } from "@utils/AppWrapper";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppWrapper>
        <Header />
        {/* <main> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </main> */}
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
