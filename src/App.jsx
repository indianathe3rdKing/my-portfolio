import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <About />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </main>
  );
};

export default App;
