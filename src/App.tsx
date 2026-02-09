import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PortfolioShowcase from "./sections/PortfolioShowcase";
import Contact from "./sections/Contact";
import SectionDivider from "./components/SectionDivider";

import ScrollBackground from "./components/ScrollBackground";

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30 relative">
      <ScrollBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <PortfolioShowcase />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
