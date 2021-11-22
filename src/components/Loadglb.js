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
            mouseX: 0,
            mouseY: 0,
            currX_rot: 0,
            currX_rot_offset: 90,
            currY_rot: 0,
            currY_rot_offset: 270,
            currZ_rot: 0,
            

        }
        this.init()
        this.init = this.init.bind(this)
        this.animate = this.animate.bind(this)
        this.mousePosLog = this.mousePosLog.bind(this)
    }

    mousePosLog(){
        document.onmousemove = handleMouseMove
        let THIS = this
        function handleMouseMove(event){
            // console.log(window.innerWidth, window.innerHeight)
            // console.log(event.clientX, event.clientY)
            THIS.state.mouseX = event.clientX
            THIS.state.mouseY = event.clientY

        }
    }
    

    animate(){
        this.state.controls.update()
        this.state.controls.enableDamping = true;
        this.state.renderer.render(this.state.scene, this.state.camera)
        
        const a = new THREE.Vector3( 0, -1, 0 )
        this.state.root.lookAt(a)
        this.state.object.rotation.z = 90 * (Math.PI / 180)

        let b1, b2, dist1, dist2
        if (window.innerHeight/2 < this.state.mouseY){
            // console.log("BOTTOM")
            b1 = (this.state.mouseY - (window.innerHeight/2))/(window.innerHeight/2)
            dist1 = b1 * 45
            this.state.object.rotation.x = (dist1 + this.state.currX_rot_offset) * (Math.PI / 180)
            
        }else if (window.innerHeight/2 > this.state.mouseY){
            // console.log("TOP")
            b1 = ((window.innerHeight/2) - this.state.mouseY)/(window.innerHeight/2)
            dist1 = b1 * 45 * -1
            this.state.object.rotation.x = (dist1 + this.state.currX_rot_offset) * (Math.PI / 180)

        }
 
        if (window.innerWidth/2 > this.state.mouseX){
            console.log("LEFT")
            b2 = ((window.innerWidth/2) - this.state.mouseX)/(window.innerWidth/2)
            dist2 = b2 * 45
            // console.log(dist2)

            this.state.object.rotation.y = (dist2 + this.state.currY_rot_offset) * (Math.PI / 180)
        
        }else if (window.innerWidth/2 < this.state.mouseX){
            console.log("RIGHT")
            b2 = ((window.innerWidth/2) - this.state.mouseX)/(window.innerWidth/2)
            dist2 = b2 * 45
            // console.log(dist2)
            
            this.state.object.rotation.y = (dist2 + this.state.currY_rot_offset) * (Math.PI / 180)

        }


        // this.state.object.rotation.y = (-45 + this.state.currY_rot_offset) * (Math.PI / 180)
        // this.state.object.rotation.x = (45 + this.state.currX_rot_offset) * (Math.PI / 180);
        

        // console.log(this.state.mouseX, this.state.mouseY)
        // this.state.object.rotation.x += 0.01
        // this.state.object.rotation.y += 0.01
        // this.state.object.rotation.z += 0.01
        // this.state.object.lookAt = 0
        
        

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
        this.state.pointLight.position.set(100, 0, 0)
        this.state.scene.add(this.state.pointLight)

        this.state.renderer.outputEncoding = THREE.sRGBEncoding
        this.state.renderer.toneMapping = THREE.ACESFilmicToneMapping
        this.state.renderer.toneMappingExposure = 1.25
        let envMapLoader = new THREE.PMREMGenerator(this.state.renderer)

        

        this.state.loader.load(this.state.glb, (gltf)=>{
            gltf.scene.traverse(function (object){

                if ( object instanceof THREE.Mesh ) {

                    // child.material = material;
                    THIS.state.object = object

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
            this.state.root.lookAt(1, 0, 0)
            this.state.scene.add(this.state.root)
            this.animate()
        })

        this.mousePosLog()
    }
}


