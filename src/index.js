/* eslint-disable no-param-reassign */
import ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import {
  Canvas,
} from '@react-three/fiber';
import './static/styles/style.scss';
import Box from './static/components/Box';

const Scene = () => {
  const camera = useRef();

  document.body.onscroll = (ev) => {
    console.log('this never get called womp comp');
    const t = document.body.getBoundingClientRect().top;
    if (camera.current) {
      camera.current.position.z = t * -0.01;
      camera.current.position.x = t * -0.0002;
      camera.current.rotation.y = t * -0.0002;
    }
  };

  return (
    <perspectiveCamera
      ref={camera}
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={1000}
    >
      <Box />
    </perspectiveCamera>
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <gridHelper args={[10, 10, 'white', 'gray']} />
      <Scene />
    </Canvas>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
