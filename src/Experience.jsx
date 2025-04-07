import {
  OrbitControls,
  useGLTF,
  useTexture,
  Center,
  Sparkles,
} from "@react-three/drei";

export default function Experience() {
  const { nodes } = useGLTF("./model/MD-Portfolio-Scene.glb");
  const bakedTexture = useTexture("./model/baked-final.jpg");
  bakedTexture.flipY = false;

  

  return (
    <>
      {/* <color args={["#030202"]} attach="background" /> */}

      <OrbitControls makeDefault />
      <Center>
        <mesh geometry={nodes.baked.geometry} position={4,2,0}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {/* <Sparkles
          size={8}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.8}
          count={40}
        /> */}
      </Center>
    </>
  );
}
