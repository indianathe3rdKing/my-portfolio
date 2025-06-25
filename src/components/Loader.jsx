import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return <Html>Loading {progress}%</Html>;
};

export default Loader;
