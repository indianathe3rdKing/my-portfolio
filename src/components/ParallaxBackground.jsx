import { useScroll, motion, useTransform, useSpring } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "-30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute -z-50 inset-0 bg-black">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(src/public/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain layer3 */}
        <motion.div
          className="absolute inset-0 -z-40 "
          style={{
            backgroundImage: "url(src/public/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-40 "
          style={{
            backgroundImage: "url(src/public/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mountain layer2 */}
        <motion.div
          className="absolute inset-0 -z-40 "
          style={{
            backgroundImage: "url(src/public/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Mountain Layer1 */}
        <motion.div
          className="absolute inset-0 -z-40 "
          style={{
            backgroundImage: "url(src/public/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
