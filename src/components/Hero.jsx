import React, { Suspense, useState } from "react";
import HeroText from "./HeroText";
import ParallaxBackground from "./ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { Ship } from "./Ship";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "./Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 765 });
  return (
    <section className="flex z-10 items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Ship scale={0.013} position={[-2.5, -2.5, 0]} />
            </Float>
          </Suspense>

          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.5} />
        </Canvas>
      </figure>
    </section>
  );
};
//  code to have the ship mouse when you hover around it
// function Rig() {
//   return useFrame((state, delta) => {
//     easing.damp3(state.camera.position, [
//       [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
//       0.5,
//       delta,
//     ]);
//   });
// }

export default Hero;
