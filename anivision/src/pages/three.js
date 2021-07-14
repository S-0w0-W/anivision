import React, { useState } from 'react'
import TopNav from "../components/topNav";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import "../css/three.css"

function MyRotatingBox(props) {
  const myMesh = React.useRef();
  const [hovered, setHover] = useState(false)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    
    
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
    myMesh.current.rotation.z = a;
   
    myMesh.current.position.x = 2*Math.sin(clock.getElapsedTime() + props.delay)
    myMesh.current.position.y = 2*Math.cos(clock.getElapsedTime() + props.delay)
    // console.log(props.delay)
    // myMesh.current.position.set(myMesh.current.position.x-0.01,myMesh.current.position.y-0.01,0);
  });

  return (
    <mesh 
      scale={1} 
      ref={myMesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry />
      <meshPhongMaterial color={hovered ? 'orange':'royalblue'} />
    </mesh>
  );
}

const Three = () => {
  return (
    <div id="THREE_page_body">
      <TopNav PageName={"three.js testing"} />
      <Canvas id="c">
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -10]} />
        <MyRotatingBox delay={0}/>
        <MyRotatingBox delay={2}/>
        <MyRotatingBox delay={4}/>
        <ambientLight intensity={0.1} />
        <directionalLight />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Three;
