import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -0.4, 0]} rotation-x={-Math.PI / 2}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <shadowMaterial attach="material" transparent opacity={0.9} />
    </mesh>
  );
}
const Scene = () => {
  return (
    <Canvas
      shadows
      dpr={window.devicePixelRatio}
      camera={{ position: [-1, 0.5, 1], zoom: 1 }}
    >
      {/*<OrbitControls />*/}
      <directionalLight position={[0, 8, 0]} intensity={1} castShadow />
      <directionalLight position={[5, 8, 10]} intensity={0.1} />
      <directionalLight position={[-10, 0, -10]} intensity={0.1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <BackDrop />
    </Canvas>
  );
};

export default Scene;
