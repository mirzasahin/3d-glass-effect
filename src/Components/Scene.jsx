import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas style={{backgroundColor:"black"}}>
      <Model />
      <directionalLight intensity={3} position={[0,3,2]}/>
      <OrbitControls />
      <Environment preset="city" />
    </Canvas>
  );
};

export default Scene;
