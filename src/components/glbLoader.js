import React from "react"
import { GLTFLoader } from 'three-stdlib';

export default class glbLoader extends React.Component {
    constructor(glb, scene) {
        super(glb, scene);
        this.state = {
            loader: new GLTFLoader(),
            glb: glb,
            scene: scene,
            root: null,
        }
      this.animate = this.animate.bind(this)
      this.test = this.test.bind(this)
      this.setPos = this.setPos.bind(this)

      this.test()
    }

    animate(){
        requestAnimationFrame(this.animate)
        // this.state.root.rotation.x += 0.01;
        this.state.root.rotation.y += 0.01;
        this.state.root.rotation.z += 0.01;
    }

    test(){
        this.state.loader.load(this.state.glb, (gltf)=>{
            this.state.root = gltf.scene
            // this.setState({ root: gltf.scene})
            console.log(this.state.root)

            this.state.root.scale.set(1, 1, 1)
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
    
}


