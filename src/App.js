import React from 'react';
import {Canvas} from 'react-three-fiber';

import {Controls} from './Controls';
import {InnerSphere} from './InnerSphere';
import {PointSphere} from './PointSphere';

export function App() {
  return (
    <Canvas camera={{position: [0, 0, 10], fov: 20}}>
      <ambientLight intensity={0.2} />
      <pointLight position={[40, 40, 40]} />
      <InnerSphere />
      <PointSphere />
      <Controls />
    </Canvas>
  );
}
