import React from "react"
import { GLTFLoader } from 'three-stdlib';
import * as THREE from "three";
import { calcPosFromAngles } from "@react-three/drei";

export default class glbLoader extends React.Component {
    constructor(glb, scene) {
        super(glb, scene);
        this.state = {
            loader: new GLTFLoader(),
            glb: glb,
            scene: scene,
            root: null,
            curScale: {
                x: 1,
                y: 1,
                z: 1
            },
            timeCount: 0,
            color: null,
            object: null
        }
        this.test = this.test.bind(this)
        this.animate = this.animate.bind(this)
        this.test()
        this.setPos = this.setPos.bind(this)
        this.setColor = this.setColor.bind(this)
        this.setScale = this.setScale.bind(this)
        this.getScale = this.getScale.bind(this)
    }

    animate(){
        requestAnimationFrame(this.animate)
        // this.state.root.rotation.x += 0.01;
        this.state.root.rotation.y += 0.01;
        // this.state.root.rotation.z += 0.01;

        // this.state.curScale.x += Math.sin(this.state.timeCount/100)*0.005
        // this.state.curScale.y += Math.sin(this.state.timeCount/100)*0.005
        // this.state.curScale.z += Math.sin(this.state.timeCount/100)*0.005

        let initalScale = this.state.curScale
        this.state.root.scale.set(initalScale.x, initalScale.y, initalScale.z)

        this.state.timeCount += 1
    }

    test(){
        let THIS = this
        this.state.loader.load(this.state.glb, (gltf)=>{
            gltf.scene.traverse(function (object){
                if ( object.isMesh ) {

                    THIS.state.object = object

                    object.material.color.set( 0xffffff * Math.random() );
            
                }

            })
            this.state.root = gltf.scene
            // console.log(this.state.root)

            let initalScale = this.state.curScale
            this.state.root.scale.set(initalScale.x, initalScale.y, initalScale.z)
            this.state.root.translateY(2)

            this.state.scene.add(this.state.root)
            this.animate()
        })
    }

    setPos(x = 0, y = 0, z = 0){
        setTimeout(() => {
            this.state.root.translateX(x)
            this.state.root.translateY(y)
            this.state.root.translateZ(z)
        }, 100);
        
    }

    setColor(color){
        this.state.color = color
        // this.state.object.material.color.set( color * Math.random() )
    }

    setScale(scaleObj){
        // console.log(scaleObj)
        this.state.curScale.x = scaleObj.x
        this.state.curScale.y = scaleObj.y
        this.state.curScale.z = scaleObj.z
    }

    getScale(){
        return(this.state.curScale)
    }

}


