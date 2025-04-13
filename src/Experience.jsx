import { OrbitControls, useGLTF, useTexture, Center } from "@react-three/drei";

export default function Experience() {
  const { nodes } = useGLTF("./model/Living Room Scene-MD.glb");
  const bakedTexture = useTexture("./model/baked-final-test.jpg");
  bakedTexture.flipY = false;

  return (
    <>
      <color args={["#030202"]} attach="background" />
      <OrbitControls
        makeDefault
        autoRotateSpeed={-0.1}
        zoomSpeed={2}
        enableZoom={true}
        minDistance={6}
        maxDistance={9}
        // enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        // minAzimuthAngle={(Math.PI*2)/1.15}
        // maxAzimuthAngle={Math.PI*2}
      />

      <Center>
        <mesh geometry={nodes.baked.geometry} position={[-2, 2.8, 0]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Center>
    </>
  );
}
