import React from "react";
import TopNav from "../components/topNav";
import envMap from "../assets/studio_small_07_4k.hdr"

import * as THREE from "three";
import { OrbitControls, FlakesTexture, RGBELoader } from 'three-stdlib';
import Loadglb from '../components/Loadglb';
import AudioVis from "../assets/audioVis.glb";
import github3d_2 from "../assets/github_3d_2.glb"
import head from "../assets/Head_BlockOut.glb"
import Bread from "../assets/bread.glb"


let scene, camera, renderer, controls, pointLight
function threeInit(){
    // scene = new THREE.Scene();

    // renderer = new THREE.WebGLRenderer({alpha:true,antialias:true})
    // renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild(renderer.domElement)

    // camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000)
    // camera.position.set(0, 0, 500)
    // controls = new OrbitControls(camera, renderer.domElement)

    // pointLight = new THREE.PointLight(0xffffff, 1)
    // pointLight.position.set(100, 100, 100)
    // scene.add(pointLight)

    // renderer.outputEncoding = THREE.sRGBEncoding
    // renderer.toneMapping = THREE.ACESFilmicToneMapping
    // renderer.toneMappingExposure = 1.25
    // let envMapLoader = new THREE.PMREMGenerator(renderer)

    // new RGBELoader().load(envMap, function(hdrmap){
        
    //     let envmap = envMapLoader.fromCubemap(hdrmap)
    //     let texture = new THREE.CanvasTexture(new FlakesTexture())
    //     texture.wrapS = THREE.RepeatWrapping
    //     texture.wrapT = THREE.RepeatWrapping
    //     texture.repeat.x = 10
    //     texture.repeat.y = 10
    
    //     const ballMaterial = {
    //         clearcoat: 1.0,
    //         cleacoatRoughness: 0.1,
    //         metalness: 0.3,
    //         roughness: 0.8,
    //         color: 0x8418ca,
    //         normalMap: texture,
    //         normalScale: new THREE.Vector2(0.05, 0.05),
    //         envMap: envmap.texture
    //     }
    
    //     let ballGeo = new THREE.SphereGeometry(100, 64, 64)
    //     let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial)
    //     let ballMesh = new THREE.Mesh(ballGeo, ballMat)
    //     scene.add(ballMesh)
    //     animate();
    // })

    // // let ballGeo = new THREE.SphereGeometry(100, 64, 64)
    // // // let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial)
    // // let ballMat = new THREE.MeshPhysicalMaterial()
    // // let ballMesh = new THREE.Mesh(ballGeo, ballMat)
    // // scene.add(ballMesh)
    // // animate();

// =============================================================================================

    new Loadglb(github3d_2, document.body)
    
}


const Testing = () => {
    threeInit()

    return (
        <div>
            <TopNav PageName={"Testing"} />
            
        </div>
    );
};

export default Testing;