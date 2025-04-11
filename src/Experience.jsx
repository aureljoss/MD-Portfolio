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
      <OrbitControls makeDefault />
        <mesh geometry={nodes.baked.geometry} position-y={-0.55} >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

    </>
  );
}
