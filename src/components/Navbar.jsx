import React, { useState } from "react";
import { motion } from "motion/react";
import HeroText from "./HeroText";
import NavMenu from "./NavMenu";
import Hero from "./Hero";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="home" className="nav-link ">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="about" className="nav-link">
          About
        </a>
      </li>

      <li className="nav-li">
        <a href="experience" className="nav-link">
          Work
        </a>
      </li>

      <li className="nav-li">
        <a href="contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 ">
        <div className="mx-auto c-space max-w-7xl">
          <div className="flex items-center justify-between py-2 sm:py-0">
            <a
              href="/"
              className="text-2xl font-bold transition-colors text-neutral-400 hover:text-white"
            >
              Eddie
            </a>
            <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <nav className="hidden sm:flex">
              <Navigation />
            </nav>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 1 }}
          >
            <nav className="pb-5">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </div>
      <Hero />
    </>
  );
};

export default Navbar;
