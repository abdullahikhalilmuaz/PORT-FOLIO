import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import "./app.css";
import Expertise from "./Pages/Expertise";
import Main from "./Pages/Home/Main";
import Footer from "./Pages/Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Expertise />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route index path="/" element={<Main />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="testimonials" element={<Testimonials />}></Route>
        <Route path="expertise" element={<Expertise />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes> */}
    </div>
  );
}
