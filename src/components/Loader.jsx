import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-mono text-center">
      Loading {progress}%
    </Html>
  );
};

export default Loader;
