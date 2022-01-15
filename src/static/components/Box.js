import React, { useRef, useState } from 'react';

const Box = (props) => {
  const boxRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  document.body.onwheel = () => {
    setRotationX((r) => r + 0.1);
    setRotationY((r) => r + 0.1);
  };

  return (
    <mesh
      rotation-x={rotationX}
      rotation-y={rotationY}
      position={props.position}
      ref={boxRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      onScroll={() => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
