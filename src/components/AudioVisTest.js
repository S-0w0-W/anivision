import { ThumbUpSharp } from "@material-ui/icons";
import React from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';
import linkedin3d from "../assets/linkedin_3d.glb"
import github3d_2 from "../assets/github_3d_2.glb"
import resume_3d from "../assets/resume_3d.glb"
import AudioVis from "../assets/audioVis.glb";
import glbLoader from './glbLoader';

export default class AudioVisTest extends React.Component {
    constructor() {
        super()
        this.state = {
            context : new AudioContext(),
            dataArray: [],
            file: null,
            audio: null,
            analyser: null,
            barArr: [],
            freqIndxArr: []
        }
        this.AudioContextanimate = this.AudioContextanimate.bind(this)
        this.handleInputAudio = this.handleInputAudio.bind(this)
        this.setupAudio = this.setupAudio.bind(this)
        this.setUpThreeJS = this.setUpThreeJS.bind(this)

    }

    componentDidMount(){
        let visLength = 20

        this.setUpThreeJS(visLength)
        this.setupAudio(visLength)
    }

    setupAudio(visLength){
        this.state.file = document.getElementById("thefile")
        this.state.audio = document.getElementById("audio")

        let THIS = this
        setTimeout(function(){ 
            THIS.state.analyser = THIS.state.context.createAnalyser();
            THIS.state.file.onchange = function() {
                var files = this.files;
                THIS.handleInputAudio(files, visLength)
            }
        }, 100);

        

        
        
    }

    handleInputAudio(files, visLength){
        // console.log(files)
        console.log(this.state.audio)
        this.state.audio.src = URL.createObjectURL(files[0])
        console.log(this.state.audio)
        this.state.audio.load();
        this.state.audio.play();
    
        console.log(this.state.context)
        var src = this.state.context.createMediaElementSource(this.state.audio);

        src.connect(this.state.analyser);
        this.state.analyser.connect(this.state.context.destination);

        
        let fftLength = 256
        let stepsize = Math.round((fftLength/2) / visLength)
        let startFreqIndx = 0
        for(let i=0;i<this.state.barArr.length;i++){
            this.state.freqIndxArr.push(startFreqIndx)
            startFreqIndx += stepsize
        }

        console.log(this.state.freqIndxArr)


        this.state.analyser.fftSize = fftLength;

        var bufferLength = this.state.analyser.frequencyBinCount;
        // console.log(bufferLength);

        this.state.dataArray = new Uint8Array(bufferLength);

        this.AudioContextanimate()
        this.state.audio.play();
    }

    AudioContextanimate(){
        // console.log(this.state.freqIndxArr)
        requestAnimationFrame(this.AudioContextanimate)
         this.state.analyser.getByteFrequencyData(this.state.dataArray);
        // console.log(this.state.dataArray)
        // console.log(this.state.barArr)

        let scaleObj

        for(let i=0;i<this.state.barArr.length;i++){
            scaleObj =  this.state.barArr[i].getScale()
            console.log(this.state.dataArray)
            console.log((this.state.dataArray[this.state.freqIndxArr[i]]/50) -1, i)
            scaleObj.y = (this.state.dataArray[this.state.freqIndxArr[i]]/50) -1
            this.state.barArr[i].setScale(scaleObj)
        }
        
    }

    setUpThreeJS(visLength){
        const scene = new THREE.Scene()

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
    
        const light2 = new THREE.DirectionalLight(0xffffff, 1)
        light2.position.set(1,5, 125)
        scene.add(light2)
    
        const renderer = new THREE.WebGLRenderer({
            alpha: true
        })
        renderer.setSize( window.innerWidth, window.innerHeight )
        renderer.setClearColor( 0x000000, 0 ); // the default


        // const loader = new GLTFLoader()
        // let obj1, obj2, obj3

        // obj1 = new glbLoader(linkedin3d, scene)
        // this.state.barArr.push(obj1)

        // obj2 = new glbLoader(github3d_2, scene)
        // this.state.barArr.push(obj2)

        // obj3 = new glbLoader(resume_3d, scene)
        // this.state.barArr.push(obj3)

        
        let THIS = this
        setTimeout(function(){ 
            // console.log(document.getElementById('threeIcons'))
            if (document.getElementById('AudioVis') !== null){
                document.getElementById('AudioVis').appendChild(renderer.domElement)

                // let visLength = 20
                let startPosX = -2.5
                let scaleObj
                scaleObj = {
                    x: 0.6,
                    y: 0.6,
                    z: 0.6
                }
                for(let i=0;i<visLength;i++){
                    let obj = new glbLoader(AudioVis, scene)
                    THIS.state.barArr.push(obj)
                    obj.setScale(scaleObj)
                    obj.setPos((startPosX + (i/4)), -0.5, 0)
                }
                // obj1.setPos(0, 0, 0)
                // obj2.setPos(1, 0, 0)
                // obj3.setPos(-1, 0, 0)
            }
        }, 100);
        
    
        
    
        var controls = new OrbitControls(camera, renderer.domElement)
        controls.update();
        controls.enableDamping = true;
    
    
        

        function animate(){
            requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)
        }
        animate()
    }

    render() {
        return (
            <div className="Audio">
                <h1>Audio Visualiser</h1>
                {/* <input id="AudioVis" type="button" value="AudioVis" onClick={test} /> */}
                <input type="file" id="thefile" accept="audio/*" />
                <audio id="audio" controls></audio>
                <div id = "AudioVis"/>
            </div>
        );
      }
}
