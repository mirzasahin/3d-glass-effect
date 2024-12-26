import {
  MeshTransmissionMaterial,
  Text,
  useFaceControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

const Model = () => {
  const mesh = useRef();
  const { nodes } = useGLTF("/medias/torrus2.glb");
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.rotation.x += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });
  return (
    <group scale={viewport.width / 15.5}>
      <Text fontSize={2.5} font="fonts/Roboto-Black.ttf" position={[0, 0, -4]}>
        Hello world!
      </Text>
      <mesh ref={mesh} {...nodes.Torus}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
