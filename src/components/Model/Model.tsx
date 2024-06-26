import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { Mesh } from "three";

export default function Model() {
  const mesh = useRef<Mesh>(null);
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.01;
    }
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
    <group scale={viewport.width / 3.5}>
      <Text
        fontSize={0.4}
        // font='fonts/ApercuMonoProBold.ttf'
        position={[0, 0, -0.5]}
        color={"#ffffff"}
      >
        FONTS & FOOTERS
      </Text>
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
