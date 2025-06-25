import { motion } from "motion/react";

motion;

const Card = ({ text, style, containerRef }) => {
  return (
    <motion.div
      className="absolute px-1 py-2  text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic
    >
      {text}
    </motion.div>
  );
};

export default Card;
