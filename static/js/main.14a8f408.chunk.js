(this.webpackJsonpanivision=this.webpackJsonpanivision||[]).push([[0],{103:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){e.exports=n.p+"static/media/github_3d.3e2eee36.glb"},112:function(e,t,n){e.exports=n.p+"static/media/bread.a859407e.glb"},114:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(15),r=n.n(i),c=(n(96),n(97),n(56)),l=n(17),A=n(21),s=n(149),m=n(60),d=n(155),u=n(72),g=n.n(u),E=n(160),w=n(151),h=n(162),p=n(153),f=n(154),b=n(70),B=n.n(b),C=n(71),v=n.n(C),y=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"white"},list:{width:250},fullList:{width:"auto"}}}));function O(e){var t=e.PageName,n=y(),a=o.a.useState(!1),i=Object(A.a)(a,2),r=i[0],l=i[1];return o.a.createElement("div",{className:n.root},o.a.createElement("div",{id:"menuButton"},o.a.createElement(d.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){l(!0)}},o.a.createElement(g.a,{style:{color:"white",fontSize:40}})),o.a.createElement(m.a,{variant:"h6",className:n.title},t)),o.a.createElement(E.a,{open:r,onClose:function(){return l(!1)},anchor:"left"},o.a.createElement("div",{className:n.list,role:"presentation"},o.a.createElement(w.a,null,["Home","About","THREE","Landing"].map((function(e,t){return o.a.createElement(h.a,{button:!0,key:e,component:c.b,to:e},o.a.createElement(p.a,null,t%2===0?o.a.createElement(B.a,null):o.a.createElement(v.a,null)),o.a.createElement(f.a,{primary:e}))}))))))}var k=function(){return o.a.createElement("div",null,o.a.createElement(O,{PageName:"Home"}))},Q=function(){return o.a.createElement("div",null,o.a.createElement(O,{PageName:"About"}))},I=n(2),P=n(20),x=n(157),G=n(158);n(103);document.addEventListener("mousemove",(function(e){}),!1);function M(e){var t=o.a.useRef(),n=Object(a.useState)(!1),i=Object(A.a)(n,2),r=(i[0],i[1]);Object(P.b)((function(n){var a=n.clock,o=a.getElapsedTime();t.current.rotation.x=o,t.current.rotation.y=o,t.current.rotation.z=o,t.current.position.x=2*Math.sin(a.getElapsedTime()+e.delay)+0,t.current.position.y=2*Math.cos(a.getElapsedTime()+e.delay)-0}));var c=Object(a.useState)(!1),l=Object(A.a)(c,2),s=l[0],m=l[1],d=(new I.TextureLoader).load("https://media-exp1.licdn.com/dms/image/C5603AQHZrMLlNEujLw/profile-displayphoto-shrink_200_200/0/1614307873790?e=1632960000&v=beta&t=9asZCAS91_OC4HxaOppbr0rLStkkUKSu-1bY_lpdtgE");return o.a.createElement("mesh",{scale:1,ref:t,onPointerOver:function(e){return r(!0)},onPointerOut:function(e){return r(!1)}},o.a.createElement("boxBufferGeometry",null),o.a.createElement("meshPhongMaterial",{map:d}),o.a.createElement(x.a,{style:{transition:"all 0.2s",opacity:s?0:1,transform:"scale(".concat(s?.5:1,")")},distanceFactor:1.5,position:[0,0,.51],transform:!0,occlude:!0,onOcclude:m},o.a.createElement("h1",{id:"myName"},"Shiyao Wang")))}function J(e){var t=o.a.useRef(),n=Object(a.useState)(!1),i=Object(A.a)(n,2),r=(i[0],i[1]);Object(P.b)((function(e){var n=e.clock.getElapsedTime();t.current.rotation.x=n,t.current.rotation.y=n,t.current.rotation.z=n}));var c=Object(a.useState)(!1),l=Object(A.a)(c,2),s=l[0],m=l[1],d=(new I.TextureLoader).load("https://media-exp1.licdn.com/dms/image/C5603AQHZrMLlNEujLw/profile-displayphoto-shrink_200_200/0/1614307873790?e=1632960000&v=beta&t=9asZCAS91_OC4HxaOppbr0rLStkkUKSu-1bY_lpdtgE");return o.a.createElement("mesh",{scale:1,ref:t,onPointerOver:function(e){return r(!0)},onPointerOut:function(e){return r(!1)}},o.a.createElement("sphereBufferGeometry",null),o.a.createElement("meshPhongMaterial",{map:d}),o.a.createElement(x.a,{style:{transition:"all 0.2s",opacity:s?0:1,transform:"scale(".concat(s?.5:1,")")},distanceFactor:1.5,position:[0,0,.51],transform:!0,occlude:!0,onOcclude:m},o.a.createElement("h1",{id:"myName"},"Shiyao Wang")))}var R=function(){return o.a.createElement("div",{id:"THREE_page_body"},o.a.createElement(O,{PageName:"three.js testing"}),o.a.createElement(P.a,{id:"c"},o.a.createElement("pointLight",{position:[10,10,5]}),o.a.createElement("pointLight",{position:[-10,-10,-10]}),o.a.createElement(M,{delay:0}),o.a.createElement(M,{delay:1}),o.a.createElement(M,{delay:2}),o.a.createElement(M,{delay:3}),o.a.createElement(M,{delay:4}),o.a.createElement(M,{delay:5}),o.a.createElement(J,null),o.a.createElement("ambientLight",{intensity:.1}),o.a.createElement("directionalLight",null),o.a.createElement(G.a,null)))},L=n(77),F=(n(110),n(78)),D=n.n(F),U=n(79),T=n.n(U),z=n(80),S=n.n(z),K=n(81),Y=n.n(K),H=n(161),V=n(16),W=n(159),j=n(82),N=n.n(j),X=(n(111),n(83)),q=n.n(X),Z=(n(112),n(118)),_=n(1),$=n(3),ee=n(9),te=n(4),ne=n(5),ae=function(e){Object(te.a)(n,e);var t=Object(ne.a)(n);function n(e,a){var o;return Object(_.a)(this,n),(o=t.call(this,e,a)).state={loader:new W.a,glb:e,scene:a,root:null},o.animate=o.animate.bind(Object(ee.a)(o)),o.test=o.test.bind(Object(ee.a)(o)),o.setPos=o.setPos.bind(Object(ee.a)(o)),o.test(),o}return Object($.a)(n,[{key:"animate",value:function(){requestAnimationFrame(this.animate),this.state.root.rotation.y+=.01,this.state.root.rotation.z+=.01}},{key:"test",value:function(){var e=this;this.state.loader.load(this.state.glb,(function(t){e.state.root=t.scene,console.log(e.state.root),e.state.root.scale.set(1,1,1),e.state.root.translateY(2),e.state.scene.add(e.state.root),e.animate()}))}},{key:"setPos",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;setTimeout((function(){e.state.root.translateX(t),e.state.root.translateY(n),e.state.root.translateZ(a)}),100)}}]),n}(o.a.Component),oe=Object(V.a)((function(e){return{arrow:{"&:before":{border:"1px solid #E6E8ED"},color:e.palette.common.white},tooltip:{backgroundColor:"rgba(255, 255, 255, 0.9)",color:"rgba(0, 0, 0, 0.6)",boxShadow:e.shadows[1],fontSize:15,margin:"34% 0"}}}))(H.a);window.addEventListener("load",(function(){console.log("BRUH");var e=new I.Scene,t={width:window.innerWidth,height:window.innerHeight},n=new I.PerspectiveCamera(30,t.width/t.height,.1,100);n.position.set(3,3,10),e.add(n);var a=new I.DirectionalLight(16777215,2);a.position.set(1,-3,20),e.add(a);var o=new I.DirectionalLight(16777215,1);o.position.set(1,5,125),e.add(o);var i=new I.WebGLRenderer({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),setTimeout((function(){console.log(document.getElementById("threeIcons")),document.getElementById("threeIcons").appendChild(i.domElement)}),100);var r=new Z.a(n,i.domElement);r.update(),r.enableDamping=!0;new W.a;new ae(N.a,e).setPos(0,0,0),new ae(q.a,e).setPos(1,0,0),function t(){requestAnimationFrame(t),r.update(),i.render(e,n)}(),window.addEventListener("resize",(function(){Object(L.a)("sizes"),t={width:document.getElementById("threeIcons").offsetWidth,height:document.getElementById("threeIcons").offsetHeight},console.log(t.width,t.height),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}),!1)}));function ie(){console.log("github icon clicked"),window.open("https://github.com/S-0w0-W?tab=repositories")}function re(){console.log("resume icon clicked"),window.open(Y.a)}function ce(){console.log("linkedin icon clicked"),window.open("https://www.linkedin.com/in/shiyao-wang-01b5911b0/")}var le=function(){return o.a.createElement("div",{className:"landingPage"},o.a.createElement(O,{PageName:"Landing"}),o.a.createElement("div",{className:"titleContainer"},o.a.createElement("p",{id:"title"},"SHIYAO WANG")),o.a.createElement("div",{className:"icons"},o.a.createElement(oe,{title:"Resume",arrow:!0},o.a.createElement("div",{onClick:re,id:"resumeIcon"},o.a.createElement("img",{src:D.a,alt:"resumeIcon"}))),o.a.createElement(oe,{title:"LinkedIn",arrow:!0},o.a.createElement("div",{onClick:ce,id:"linkedinIcon"},o.a.createElement("img",{src:S.a,alt:"linkedinIcon",width:"100",height:"100"}))),o.a.createElement(oe,{title:"GitHub",arrow:!0},o.a.createElement("div",{onClick:ie,id:"githubIcon"},o.a.createElement("img",{src:T.a,alt:"githubIcon"})))),o.a.createElement("div",{id:"threeIcons"}))};var Ae=function(){return o.a.createElement(c.a,{basename:"/"},o.a.createElement("div",null,o.a.createElement(l.a,{exact:!0,path:"/",component:k}),o.a.createElement(l.a,{exact:!0,path:"/home",component:k}),o.a.createElement(l.a,{path:"/about",component:Q}),o.a.createElement(l.a,{path:"/three",component:R}),o.a.createElement(l.a,{path:"/landing",component:le})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(113);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAD90lEQVR4nO3dv2sUQRQH8O/buyQQvT2TOyEi/mhskkDs7CzEKGJaGy0UYgw2YhpBbcVCiCIiyJF0xsJaQUVs/AfibyGNKEEIt2azp5KYu302CVjoXc6Z3TeXe58yu3k3O192Z2cSbgCllFJKKaVUuyHbBYOgMhBn47MEDIOxF8AW25+Rsh8gfALw3Kt5U729ubc2i1sLgJk7gzCaBOE8gIytuo6JAdwr5P0JIvplo6CVAJi5M1iKHgM4bKOe++hFIZ87ZiMEz0ZzgjCaRNt0PgDwoSCMbtqoZHwHBEFlgDPxK2zex86/1KjmDRUKuXcmRYzvAM7GY2i/zgeATJyNR02LmD+CYgwb12hRxGx87eYBEHYb12hZtMe0QtZCK7bWO1jclrc+10hTOVziOodzpvWtvAWp/6cBCNMAhNkYAxIxx9zVE0XjYJwEMLj247cgzCz6fmkf0Ypk+2wxHiAbDFL/NQiXyz93crb6mMBDfztOwCxXO0aKxe75Zms33ZYEru9Pzj2C5pi76nU+ADCwn7Krj+aYu9JsWxKcC6Anisbrdf46Bvb3RNFYGm1KknMBgHEqkXMd5V4AQH8T5w42PsVtLgbQjFi6AaZcDOB9Quc6yb0ACPebOHcmwZakwrkAFn2/RMBso/MImC34fimNNiXJuQD2Ea1wtWOkXgjrEzFbfxiX5ORSRLHYPc/MB4IoOrf2qrn+tvMGhAe9vl/aDJ0POLoU4ZK2W4poNxqAMA1AmHOD8MLCwtZMZ+dRZjoIokGAdwDYtXb4C0BfQfyGmF+uLi8/6evr+yHZXlPODMJBpdLPcXwJjBMAujf48T9BeAjPu1HM5T5s8HeasukHYWamchhe5Vr8CozT2HjnA0A3GGdQi1+Xw/ByUm1MkngA38LKBEDXYPY4zAJ0PVhcumirXWkRD4CJL9irhSu2aqVFPAAAxv9d9oftFmulwoUA2poGIEx8HtDqa0Wm9A4QpgEI0wCEaQDCNABhGoAwDUCY+Dyg0XJv0qTnIXoHCNMAhGkAwjQAYRqAMA1AmAYgTHweIP0eLk3vAGEagDANQJj4GKBrQUqUBiBMAxCmAQjTAIRpAMI0AGHi8wDp93BpegcI0wCEaQDCNABhGoAwDUCYBiDMxjyggjrfoy+93p+wyLSAjR00PhvXaFlsfO3mm/gAz0xrtCoCnpjWMA7A87wpADXTOi2oyp43bVrEOIBCLvcejLumdVoNE+4Uff+jaR1bWxl2rG1l2C5bWj0r5P0RIlo1LWTlNZSIVgt5/zgItwFUbdR0VJUJt2x1PpDEdraVSn8cx6PEfASgvWiwzVUL+A7wJwKeciYzndQ3cymllFJKKaXax2/EUBaYUFdJ6wAAAABJRU5ErkJggg=="},79:function(e,t){e.exports="data:image/png;base64,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"},80:function(e,t){e.exports="data:image/png;base64,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"},81:function(e,t,n){e.exports=n.p+"static/media/resume.6d314de3.pdf"},82:function(e,t,n){e.exports=n.p+"static/media/linkedin_3d.3f62e117.glb"},83:function(e,t,n){e.exports=n.p+"static/media/github_3d_2.699194d8.glb"},91:function(e,t,n){e.exports=n(114)},96:function(e,t,n){},97:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.14a8f408.chunk.js.map