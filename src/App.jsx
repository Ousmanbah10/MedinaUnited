import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Homepage.jsx";
import About from "./Pages/About.jsx";
import News from "./Pages/News.jsx";
import Contact from "./Pages/Contact.jsx";
import FAQ from "./Pages/FAQ.jsx";
import Teams from "./Pages/Teams.jsx";
import Sponsors from "./Pages/Sponsors.jsx";
import Join from "./Pages/Join.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
