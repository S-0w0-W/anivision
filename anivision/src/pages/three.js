import React, { useState } from 'react'
import TopNav from "../components/topNav";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import "../css/three.css"

document.addEventListener('mousemove', onMouseUpdate, false);

var x = null;
var y = null;

var test = null;

function onMouseUpdate(e) {
  // x = (e.pageX / window.innerWidth) - 0.5;
  // y = (e.pageY / window.innerHeight) - 0.5;

  // console.log(x, y)
}

function MyRotatingBox(props) {
  const myMesh = React.useRef();
  const [hovered, setHover] = useState(false)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    const b = 5

    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
    myMesh.current.rotation.z = a;

    // myMesh.current.scale.x = 0.5 * Math.sin((clock.getElapsedTime() + props.delay) * b);
    // myMesh.current.scale.y = 0.5 * Math.cos((clock.getElapsedTime() + props.delay) * b);
    // myMesh.current.scale.z = 0.5 * Math.cos((clock.getElapsedTime() + props.delay) * b);

    myMesh.current.position.x = (2 * Math.sin(clock.getElapsedTime() + props.delay)) + (x * 3);
    myMesh.current.position.y = (2 * Math.cos(clock.getElapsedTime() + props.delay)) - (y * 3);
    // console.log(props.delay)
    // myMesh.current.position.set(myMesh.current.position.x-0.01,myMesh.current.position.y-0.01,0);
  });

  const [size, set] = useState(0.5)
  const [hidden, setVisible] = useState(false)
  // const colorMap = useLoader(TextureLoader, "/home/shiyao-wang/Documents/websites/anivision/anivision/src/pages/test.jpg")

  return (
    <mesh
      scale={1}
      ref={myMesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry />
      <meshPhongMaterial />
      <Html
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[0, 0, 0.51]}
        transform
        occlude
        onOcclude={setVisible}>
        <h1>Shiyao Wang</h1>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHZrMLlNEujLw/profile-displayphoto-shrink_200_200/0/1614307873790?e=1632960000&v=beta&t=9asZCAS91_OC4HxaOppbr0rLStkkUKSu-1bY_lpdtgE" />
      </Html>

    </mesh>
  );
}

function RotatingStill(props) {
  // const myMesh = React.useRef();
  const myMesh = React.useRef();
  const [hovered, setHover] = useState(false)


  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    const b = 5

    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
    myMesh.current.rotation.z = a;


    // myMesh.current.scale.x = 0.5 * Math.sin((clock.getElapsedTime() + props.delay) * b);
    // myMesh.current.scale.y = 0.5 * Math.cos((clock.getElapsedTime() + props.delay) * b);
    // myMesh.current.scale.z = 0.5 * Math.cos((clock.getElapsedTime() + props.delay) * b);
    // console.log(props.delay)
    // myMesh.current.position.set(myMesh.current.position.x-0.01,myMesh.current.position.y-0.01,0);
  });

  const [size, set] = useState(0.5)
  const [hidden, setVisible] = useState(false)
  const texture = new THREE.TextureLoader().load("https://media-exp1.licdn.com/dms/image/C5603AQHZrMLlNEujLw/profile-displayphoto-shrink_200_200/0/1614307873790?e=1632960000&v=beta&t=9asZCAS91_OC4HxaOppbr0rLStkkUKSu-1bY_lpdtgE");
  // const colorMap = useLoader(TextureLoader, "/home/shiyao-wang/Documents/websites/anivision/anivision/src/pages/test.jpg")

  return (
    <mesh
      scale={1}
      ref={myMesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <sphereBufferGeometry />
      <meshPhongMaterial map={texture} />
      <Html
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[0, 0, 0.51]}
        transform
        occlude
        onOcclude={setVisible}>
        <h1>Shiyao Wang</h1>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHZrMLlNEujLw/profile-displayphoto-shrink_200_200/0/1614307873790?e=1632960000&v=beta&t=9asZCAS91_OC4HxaOppbr0rLStkkUKSu-1bY_lpdtgE" />
      </Html>

    </mesh>
  );
}

const Three = () => {
  return (
    <div id="THREE_page_body">
      {/* <img src="https://media-exp1.licdn.com/dms/image/C5603AQHZrMLlNEujLw/profile-displayphoto-shrink_200_200/0/1614307873790?e=1632960000&v=beta&t=9asZCAS91_OC4HxaOppbr0rLStkkUKSu-1bY_lpdtgE" /> */}
      <TopNav PageName={"three.js testing"} />
      <Canvas id="c">
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -10]} />
        <MyRotatingBox delay={0} />
        <MyRotatingBox delay={1} />
        <MyRotatingBox delay={2} />
        <MyRotatingBox delay={3} />
        <MyRotatingBox delay={4} />
        <MyRotatingBox delay={5} />
        <RotatingStill />
        <ambientLight intensity={0.1} />
        <directionalLight />
        <OrbitControls />
      </Canvas>

    </div>
  );
};

export default Three;
