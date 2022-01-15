import ReactDOM from 'react-dom';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import './static/styles/style.scss';
import { Box, CameraControls } from './static/components';

const App = () => {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
