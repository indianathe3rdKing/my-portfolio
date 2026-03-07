import { lazy, Suspense } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import { Footer } from "./components/Footer";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const Hero = lazy(() => import("./components/Hero"));

const App = () => {
  return (
    <main>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Suspense>
          <Hero />
        </Suspense>
        <About id="about" />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
