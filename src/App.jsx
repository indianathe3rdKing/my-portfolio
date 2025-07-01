import About from "./components/About";
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
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        {/* {about} */}
        {/* {projects} */}
        {/* {experience} */}
        {/* {testiomonial} */}
        {/* {contact} */}
        {/* {footer} */}
      </div>
    </main>
  );
};

export default App;
