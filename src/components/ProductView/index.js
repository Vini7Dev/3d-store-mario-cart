import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function MarioKart() {
  const { scene } = useGLTF('./mariokart.gltf');

  const marioKartRef = useRef();

  useFrame(() => {
    marioKartRef.current.rotation.y += 0.01;
  })

  return <primitive ref={marioKartRef} object={scene} scale={4} />
}

function ProductView() {
  return (
    <Canvas
      style={{
        height: window.innerHeight - 105
      }}
      camera={{
        fov: 9,
        position: [0, 35, 40]
      }}
    >
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />

      <MarioKart />
    </Canvas>
  );
}

export default ProductView;
