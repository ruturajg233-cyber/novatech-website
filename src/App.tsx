import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Showreel from "./components/Showreel";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 flex flex-col selection:bg-purple-deep selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Showreel />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
