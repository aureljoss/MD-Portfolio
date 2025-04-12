import {
  OrbitControls,
  useGLTF,
  useTexture,
  Center
} from "@react-three/drei";

export default function Experience() {
  const { nodes } = useGLTF("./model/MD-Portfolio-Scene.glb");
  const bakedTexture = useTexture("./model/baked-final-test.jpg");
  bakedTexture.flipY = false;

  

  return (
    <>
      <OrbitControls 
      makeDefault 
      autoRotateSpeed={-0.1}
      zoomSpeed={2}
      minZoom={40}
      maxZoom={140}
      enablePan={false}
      dampingFactor={0.05}
      minPolarAngle={Math.PI /4}
      maxPolarAngle={Math.PI / 2}
      />

      <Center>
        <mesh geometry={nodes.baked.geometry} position={[-2,2.8,0]}>
          <meshBasicMaterial map={bakedTexture}/>
        </mesh>
      </Center>

    </>
  );
}

