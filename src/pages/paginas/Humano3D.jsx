import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import './Humano3D.css'; // Incluye el archivo CSS

const Model = (props) => {
  // Usa useGLTF para cargar el modelo
  const { scene } = useGLTF('./ciber/scene.gltf'); // Cambia la ruta a tu modelo GLB o GLTF

  return (
    <primitive 
      object={scene} 
      scale={[3, 3, 3]} 
      position={[0, -5, 0]} 
      {...props} 
    />
  );
};

const Humano3D = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Model /> {/* Renderiza el modelo 3D */}
        <PerspectiveCamera 
          makeDefault 
          position={[-5, -5, -5]} 
          fov={75} 
        />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={0} 
          target={[0, 0, 0]} 
        />
      </Canvas>
    </div>
  );
};

export default Humano3D;
