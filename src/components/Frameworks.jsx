"use client";

import { color, motion, useTime, useTransform } from "motion/react";
import { SiFigma } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

export default function UseTime() {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 6000], // time in milliseconds
    [0, 360], // rotation in degrees
    { clamp: false }
  );

  const tinyBox = {
    width: 40,
    height: 40,
    backgroundColor: "#9911ff",
    borderRadius: 5,
    rotate: useTransform(() => rotate.get() * 1.5), // 2x speed
  };

  const smallBox = {
    width: 80,
    height: 80,
    color: "#fff",
    backgroundColor: "#dd00ee",
    borderRadius: 5,
    rotate: useTransform(() => rotate.get() * 0.5), // 1.5x speed
  };

  const box = {
    width: 90,
    height: 90,
    backgroundColor: "#ff0088",
    borderRadius: 6,
    rotate: useTransform(() => rotate.get() * 0.25), // 1x speed
  };

  return (
    <>
      <div className="grid-layer" style={{ filter: "blur(1px)" }}>
        <div className="box-container" style={{ width: 500, gap: 80 }}>
          <motion.div
            className="flex items-center justify-center "
            style={{ ...tinyBox, backgroundColor: "#F24E1E" }}
          >
            <SiFigma className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ ...tinyBox, backgroundColor: "	#1572B6" }}
          >
            <IoLogoCss3 className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ ...tinyBox, backgroundColor: "	#00BCFF" }}
          >
            <RiTailwindCssFill className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ ...tinyBox, backgroundColor: "	#00C7B7" }}
          >
            <SiNetlify className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ ...tinyBox, backgroundColor: "	#F24E1E" }}
          >
            <SiFigma className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ ...tinyBox, backgroundColor: "#1572B6" }}
          >
            <IoLogoCss3 className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ ...tinyBox, backgroundColor: "	#00BCFF" }}
          >
            <RiTailwindCssFill className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ ...tinyBox, backgroundColor: "	#00C7B7" }}
          >
            <SiNetlify className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </div>
      <div className="grid-layer" style={{ filter: "blur(0px)" }}>
        <div className="box-container gap-5" style={{ width: 600 }}>
          <motion.div
            className="flex items-center justify-center "
            style={{ ...smallBox, backgroundColor: "#181717" }}
          >
            <FaGithub className=" text-white text-5xl" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center "
            style={{ ...smallBox, backgroundColor: "#61DAFB" }}
          >
            <FaReact className="text-[#20232A] text-5xl" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center "
            style={{ ...smallBox, backgroundColor: "	#3178C6" }}
          >
            <BiLogoTypescript className="text-white text-5xl" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center "
            style={{ ...smallBox, backgroundColor: "#F05032" }}
          >
            <FaGitAlt className="text-white text-5xl" />
          </motion.div>
        </div>
      </div>
      <div className="grid-layer">
        <div className="box-container">
          <motion.div
            style={{ ...box, backgroundColor: "#323330" }}
            className="flex items-center justify-center"
          >
            <IoLogoJavascript className="text-[#F7DF1E] text-5xl" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

/**
 * ==============   Styles   ================
 */
// const layer: React.CSSProperties = {
// position: "absolute",
// top: 0,
// left: 0,
// right: 0,
// bottom: 0,
// display: "flex",
// justifyContent: "center",
// alignItems: "center",
// gap: 20,
// };

// const boxContainer: React.CSSProperties = {
// display: "flex",
// justifyContent: "center",
// alignItems: "center",
// gap: 50,
// flexWrap: "wrap",
// };
