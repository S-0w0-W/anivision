import React from "react"
import { GLTFLoader } from 'three-stdlib';
import * as THREE from "three";
import { OrbitControls, FlakesTexture, RGBELoader } from 'three-stdlib';
import envMap from "../assets/studio_small_07_4k.hdr"
// import envMap from "../assets/studio_small_04_4k.hdr"


export default class Loadglb extends React.Component {
    constructor(glb, div) {
        super(glb, div);
        this.state = {
            loader: new GLTFLoader(),
            glb: glb,
            div: div,
            root: null,
            scene: null, 
            camera: null, 
            renderer: null, 
            controls: null, 
            pointLight: null,
            object: null,
        }
        this.init()
        this.init = this.init.bind(this)
        this.animate = this.animate.bind(this)
    }
    

    animate(){
        this.state.controls.update()
        this.state.controls.enableDamping = true;
        this.state.renderer.render(this.state.scene, this.state.camera)
        requestAnimationFrame(this.animate)
    }

    init(){
        let THIS = this

        this.state.scene = new THREE.Scene();

        this.state.renderer = new THREE.WebGLRenderer({alpha:true,antialias:true})
        this.state.renderer.setSize(window.innerWidth, window.innerHeight)
        this.state.div.appendChild(this.state.renderer.domElement)

        this.state.camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000)
        this.state.camera.position.set(0, 0, 500)
        this.state.controls = new OrbitControls(this.state.camera, this.state.renderer.domElement)

        this.state.pointLight = new THREE.PointLight(0xffffff, 1)
        this.state.pointLight.position.set(0, 200, 0)
        this.state.scene.add(this.state.pointLight)

        this.state.renderer.outputEncoding = THREE.sRGBEncoding
        this.state.renderer.toneMapping = THREE.ACESFilmicToneMapping
        this.state.renderer.toneMappingExposure = 1.25
        let envMapLoader = new THREE.PMREMGenerator(this.state.renderer)

        

        this.state.loader.load(this.state.glb, (gltf)=>{
            gltf.scene.traverse(function (object){

                if ( object instanceof THREE.Mesh ) {

                    // child.material = material;

                    new RGBELoader().load(envMap, function(hdrmap){
    
                        let envmap = envMapLoader.fromCubemap(hdrmap)
                        let texture = new THREE.CanvasTexture(new FlakesTexture())
                        texture.wrapS = THREE.RepeatWrapping
                        texture.wrapT = THREE.RepeatWrapping
                        texture.repeat.x = 50
                        texture.repeat.y = 50
                    
                        const Materialprop = {
                            clearcoat: 1.0,
                            cleacoatRoughness: 0.1,
                            metalness: 0.3,
                            roughness: 0.8,
                            color: 0x8418ca,
                            normalMap: texture,
                            // normalScale: new THREE.Vector2(0.05, 0.05),
                            envMap: envmap.texture
                        }
                        
                        let material = new THREE.MeshPhysicalMaterial(Materialprop);
                        object.material = material;
                    })
        
                }

            })
            this.state.root = gltf.scene
            this.state.root.scale.set(400, 400, 400)
            this.state.scene.add(this.state.root)
            this.animate()
        })
    }
}


