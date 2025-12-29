import { useRef } from "react";
import Card from "./Card";
import Background from "three/src/renderers/common/Background.js";
import CopyEmailButton from "./CopyEmailButton";
import Frameworks from "./Frameworks";
import { PiFigmaLogo } from "react-icons/pi";

const About = () => {
  const grid2Container = useRef();
  // Get only the date in YYYY-MM-DD format
  const date = new Date().toLocaleDateString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <section id="about" className="c-space section-spacing">
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
              I’m a developer who learns by building. I started with the web,
              not because it’s trendy, but because it teaches fundamentals—how
              systems connect, how users interact, and how ideas become real
              products. I’m still learning, still refining, and intentionally
              growing into apps and broader software systems through hands-on
              projects.With already a few project under my belt, I’m excited to
              keep building, keep learning, and see where this journey takes me.
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
        <div
          className="grid-black-color grid-3  "
          style={{
            backgroundImage: "url(/assets/time.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "cover",
          }}
        >
          <div className="bg-black opacity-9 absolute w-full h-full inset-10" />
          <div className="flex items-center">
            <div className="z-10 w-[50%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                I'm based in Port Elizabeth and open to opportunities worldwide.
              </p>
            </div>
            <div className=" absolute bottom-[10%] right-[10%] subtext">
              <p>{date}</p>
              <p>{timeZone}</p>
              <p>South Africa SAST, UTC+2</p>
            </div>
          </div>
        </div>
        {/* Grid 4*/}
        <div className="grid-special-color grid-4 ">
          <div className="flex flex-col items-center justify-center gap-4 size-full ">
            <p className="text-center headtext">Let's work together</p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5*/}
        <div className="grid-default-color grid-5 ">
          <div className="absolute inset-y-0 md:inset-y-1 w-full h-full start-0  md:scale-125 ">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
