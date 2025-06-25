import { useRef } from "react";
import Card from "./Card";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 ">
          <img
            src="src/public/assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext">Hi, I'M Indiphile</p>
            <p className="text-neutral-300">
              Over the past year, I developed frontend and backend dv skills to
              deliver dynamic and responsive software and web applications
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo  "></div>
        </div>
        {/* Grid 2*/}
        <div className="grid-default-color grid-2 ">
          <div className="flex items-center justify-center w-full h-full">
            <div
              ref={grid2Container}
              className="flex items-center justify-center text-center text-5xl text-gray-500"
            >
              Code is my craft
              <Card
                text="CSS"
                style={{ rotate: "90deg", top: "30%", left: "70%" }}
                containerRef={grid2Container}
              />
              <Card
                text="Framer Motion"
                style={{ rotate: "70deg", top: "20%", left: "10%" }}
                containerRef={grid2Container}
              />
              <Card
                text="TAILWIND"
                style={{ rotate: "120deg", top: "40%", left: "30%" }}
                containerRef={grid2Container}
              />
              <Card
                text="JAVASCRIPT"
                style={{ rotate: "45deg", top: "60%", left: "50%" }}
                containerRef={grid2Container}
              />
              <Card
                text="REACT"
                style={{ rotate: "15deg", top: "80%", left: "0%" }}
                containerRef={grid2Container}
              />
            </div>
          </div>
        </div>
        {/* Grid 3*/}
        <div className="grid-black-color grid-3 "></div>
        {/* Grid 4*/}
        <div className="grid-special-color grid-4 "></div>
        {/* Grid 5*/}
        <div className="grid-default-color grid-5 "></div>
      </div>
    </section>
  );
};

export default About;
