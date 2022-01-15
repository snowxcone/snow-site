import React, { useRef } from 'react';
import {
  extend, useFrame, useThree,
} from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  camera.position.setZ(30);
  camera.position.setX(-3);

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls ref={controls}
      args={[camera, domElement]}
    />
  );
};

export default CameraControls;
