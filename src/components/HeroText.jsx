import React from "react";
import { FlipWords } from "./FlipWord";
import { motion } from "motion/react";

const HeroText = ({ isOpen }) => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      className={
        "z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
      }
    >
      {/* {Desktop view} */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="tracking-wide "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Hi I'm Indiphile
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Aspiring FullStack Developer <br /> & Plant Ops Pro <br />
            Dedicated to Crafting
          </motion.p>
          <div>
            <FlipWords
              words={words}
              className="text-2xl text-white font-medium"
            />
          </div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Web Solution
          </motion.p>
        </div>
      </div>
      {/* {Mobile View} */}
      <div className="flex flex-col space-y-6 mt-25 md:hidden">
        <motion.h1
          className="text-2xl tracking-wide font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Eddie'
        </motion.h1>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Building
          </motion.p>
          <div>
            <FlipWords words={words} className={"text-3xl font-bold"} />
          </div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
