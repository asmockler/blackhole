import React, {useMemo} from 'react';

function Point({x, y, z}) {
  return (
    <mesh visible receiveShadow position={[x, y, z]}>
      <sphereBufferGeometry attach="geometry" args={[0.01, 10, 10]} />
      <meshPhongMaterial attach="material" color="tomato" />
    </mesh>
  );
}

export function PointSphere() {
  const numPoints = 3000;

  // From https://stackoverflow.com/questions/9600801/evenly-distributing-n-points-on-a-sphere/44164075#44164075
  const positions = useMemo(
    () =>
      new Array(numPoints).fill().map((_, index) => {
        const startingPoint = index + 0.5;
        const phi = Math.acos(1 - 2 * (startingPoint / numPoints));
        const theta = Math.PI * (1 + Math.sqrt(5)) * startingPoint;

        return [
          Math.cos(theta) * Math.sin(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(phi)
        ];
      }),
    [numPoints]
  );

  return (
    <group>
      {positions.map(([x, y, z]) => (
        <Point key={`${x}-${y}-${z}`} x={x} y={y} z={z} />
      ))}
    </group>
  );
}
