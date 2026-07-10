import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Box from "./Hero";
import Features from "./Features";
import Coll from "./Coll";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Box />
      <Features />
      <Coll />
      <Footer />
    </>
  );
}

function About() {
  return (
    <div className="text-center mt-20 text-4xl font-bold">
      About Page
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center mt-20 text-4xl font-bold">
      Contact Page
    </div>
  );
}

function Login() {
  return (
    <div className="text-center mt-20 text-4xl font-bold">
      Login Page
    </div>
  );
}

function Signup() {
  return (
    <div className="text-center mt-20 text-4xl font-bold">
      Signup Page
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/coll" element={<Coll />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}