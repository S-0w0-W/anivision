import React, { useState } from 'react'
import TopNav from "../components/topNav";
import "../css/landing.css"
import resumeIcon from "../assets/icons8-resume-96.png"
import githubIcon from "../assets/icons8-github-96.png"
import linkedinIcon from "../assets/icons8-linkedin-120.png"
import ResumePDF from "../assets/resume.pdf"
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { GLTFLoader } from 'three-stdlib';
import linkedin3d from "../assets/linkedin_3d.glb"
import Bread from "../assets/bread.glb"
import * as THREE from "three";
import { OrbitControls } from 'three-stdlib';


const LightTooltip = withStyles((theme) => ({
    arrow: {
        "&:before": {
          border: "1px solid #E6E8ED"
        },
        color: theme.palette.common.white
      },
    tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: 'rgba(0, 0, 0, 0.6)',
        boxShadow: theme.shadows[1],
        fontSize: 15,
        margin: "34% 0",
    },
}))(Tooltip);




window.onload = function() {

    const scene = new THREE.Scene()
    // scene.background = new THREE.Color( 0x301201 );

    // var sizes = {
    //     width: document.getElementById('threeIcons').offsetWidth,
    //     height: document.getElementById('threeIcons').offsetHeight
    // }
    // console.log(window.innerWidth, window.innerHeight)
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const camera = new THREE.PerspectiveCamera(30, sizes.width/sizes.height, 0.1, 100)
    // camera.position.set(0, 0.01, 5)
    camera.position.set(3, 3, 10)

    scene.add(camera)

    const light = new THREE.DirectionalLight(0xffffff, 2)
    light.position.set(1,-3, 20)
    scene.add(light)

    const renderer = new THREE.WebGLRenderer({
        alpha: true
    })
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setClearColor( 0x000000, 0 ); // the default
    document.getElementById('threeIcons').appendChild(renderer.domElement)

    var controls = new OrbitControls(camera, renderer.domElement)
    controls.update();
    controls.enableDamping = true;

    let obj

    const loader = new GLTFLoader()
    loader.load(linkedin3d, (gltf)=>{
        let root = gltf.scene
        obj = gltf.scene

        root.scale.set(1,1,1)
        root.translateY(2)

        animate()
        scene.add(gltf.scene)
    })

    

    function animate(){
        requestAnimationFrame(animate)
        // console.log(obj)
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
        obj.rotation.z += 0.01;
        controls.update();
        renderer.render(scene, camera)

        // console.log("bruh")
    }
    

    function onWindowResize(){
        sizes = {
            width: document.getElementById('threeIcons').offsetWidth,
            height: document.getElementById('threeIcons').offsetHeight
        }

        console.log(sizes.width, sizes.height)

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
    }
    window.addEventListener( 'resize', onWindowResize, false );
    // setTimeout(function() {
        

    //     let x = document.getElementsByClassName("landingPage")
    //     x[0].appendChild(renderer.domElement)

    //     renderer.render(scene, camera)
        
    //     window.open(Bread)
    //     console.log(Bread)

    //     const loader = new GLTFLoader()
    //     loader.load(Bread, (gltf)=>{
    //         scene.add(gltf.scene)
    //     })

    //     animate()
    // }, 100)
  };

const Landing = () => {

    


    return (
        <div className="landingPage">
            <TopNav PageName={"Landing"} />
            <div className="titleContainer">
                <p id="title">SHIYAO WANG</p>
            </div>
            <div className="icons">
            <LightTooltip title="Resume" arrow>
                <div onClick={resumeIconClick} id="resumeIcon">
                    <img  src={resumeIcon} alt="resumeIcon"/>
                </div>
            </LightTooltip>
            <LightTooltip title="LinkedIn" arrow>
                <div onClick={linkedinIconClick}id="linkedinIcon">
                    <img  src={linkedinIcon} alt="linkedinIcon" width="100" height="100"/>
                </div>
            </LightTooltip>
            <LightTooltip title="GitHub" arrow>
                <div onClick={githubIconClick}id="githubIcon">
                    <img  src={githubIcon} alt="githubIcon"/>
                </div>
            </LightTooltip>
            </div>
            <div id = "threeIcons"/>
        </div>
    );
};

function githubIconClick(){
    console.log("github icon clicked")
    window.open("https://github.com/S-0w0-W?tab=repositories");
}

function resumeIconClick(){
    console.log("resume icon clicked")
    window.open(ResumePDF);
}

function linkedinIconClick(){
    console.log("linkedin icon clicked")
    window.open("https://www.linkedin.com/in/shiyao-wang-01b5911b0/");
}

export default Landing;
