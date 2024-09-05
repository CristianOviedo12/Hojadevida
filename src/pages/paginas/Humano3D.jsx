import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import './Humano3D.css'; // Incluye el archivo CSS

const Humano3D = () => {
  const { scene } = useGLTF('/ciber/scene.gltf');

  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <primitive 
          object={scene} 
          scale={[3, 3, 3]} 
          position={[0, -5, 0]}  // Ajusta esta posición para alinear el modelo con la base
        />
        <PerspectiveCamera 
          makeDefault 
          position={[5, 5, 5]} // Ajusta la posición de la cámara para encuadrar el modelo
          fov={75} // Ajusta el campo de visión
        />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
          target={[0, 0, 0]} 
        />
      </Canvas>
    </div>
  );
};

export default Humano3D;
