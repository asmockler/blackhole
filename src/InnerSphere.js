import React from 'react';

export function InnerSphere() {
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <meshBasicMaterial attach="material" color="white" />
    </mesh>
  );
}
