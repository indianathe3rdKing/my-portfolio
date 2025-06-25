import React, { useState } from "react";
import HeroText from "./HeroText";
import ParallaxBackground from "./ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "./Astronaut";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <section className="flex z-10 items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas>
          <Astronaut />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.5} />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
