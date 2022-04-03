import * as THREE from 'https://cdn.skypack.dev/three@v0.132.2';

import { OrbitControls } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/controls/OrbitControls.js';
import { TrackballControls } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/controls/TrackballControls.js';
import { DragControls } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/controls/DragControls.js';
import { ColladaLoader } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/loaders/ColladaLoader.js';
import { Projector } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/renderers/Projector.js';

import { mset } from './mset.js';

import { bottomUp } from './adjusters.js';

let container,dae;
var scene, renderer;

let raycaster = new THREE.Raycaster();
let mouseVector = new THREE.Vector2();
var camera, controls;
var nset;
var cfig,pairs;

var w = window.innerWidth;
var h = window.innerHeight;
const xyz = ["x","y","z"];
const lert = top.lert;


//window.addEventListener("message", receiveMessage, false);

$(document).ready(function(){
  //opener.postMessage("Ready",opener.location.href);
  threeStart();
  $("#camSwitch").on("mousedown",function(e){
    let cam = mset.camera.type === "Perspective"? "Orthographic": "Perspective";
    mset.camera.type = cam;
    camSwitcher();
    $(this).html(cam);
  });
  $("#view").on("mousedown",function(e){
    let name = $(e.target).html();
    fView(name);
  });
  $(window).on("resize",function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
   });
});

function receiveMessage(event) {
  var ed,nb;
    nset = event.data;
		cfig = nset.cfig;
    init();
    animate();
		camSwitcher();
		viewer();
}
//var mset;

function threeStart() {
    nset = top.nset;
		cfig = nset.cfig;
   var mcheck = nset["Hotel"].monitors["Hotel-0"];   
   //lert(mcheck,1);
    init();
    animate();
		camSwitcher();
		viewer();
}



function camSwitcher(){
  let cam = mset.camera.type; 
  $("#camSwitch").html(cam);
  let p = mset.camera.position[cam];
  if(cam === "Perspective"){
    $("#view").hide();
    $("#camPos").html(p.join(",")).show();
		mset.camera.position[cam] = p;
		camera.position.set(p[0],p[1],p[2]);
		camera.updateProjectionMatrix();
		camera.lookAt(scene.position);
  }
  else{
    $("#camPos").hide();
    $("#view").show();
		fView("Top");
  }
	
 // var sc=mset.camera.scale[mset.camera.type]
  //scene.scale.set(sc,sc,sc);
}  

function viewer(){
  var k,v;
  $.each(mset.view,function(k,v){
    $("#view").append($(document.createElement("span"))
      .html(k)
      .css({
        cursor:"pointer",
        paddingRight:"5px"
      })
     )
  });
}

function fView(name){
  let p = mset.view[name];
  let cam = "Orthographic";
  mset.camera.position[cam] = p;
  camera.position.set(p[0],p[1],p[2]);
  camera.quaternion.identity();
  camera.updateProjectionMatrix();
  camera.lookAt(scene.position);
}

function crosshairs(ow,oh){
  $("body")
  .append($(document.createElement("div"))
    .css({
      position:"absolute",
      top : "0px",
      left:  "50%",
      width:"1px",
      height: "100%",
      backgroundColor:"black"
    })
  )
  .append($(document.createElement("div"))
    .css({
      position:"absolute",
      top : "50%",
      left: "0px",
      width: "100%",
      height: "1px",
      backgroundColor:"black"
    })
  )
}

function init() {
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	
  renderer.setSize( w,h );
  renderer.setPixelRatio( window.devicePixelRatio );
  document.body.appendChild( renderer.domElement );
  renderer.domElement.style.cursor = "pointer";
// replace with pointercontrols
//renderer.domElement.addEventListener( 'mousedown', mouseDown, false );
//renderer.domElement.addEventListener( 'mouseup', mouseUp, false );
 //renderer.domElement.addEventListener('mousewheel', mouseScroll, false);
 
 //window.addEventListener( 'resize', reloader, false );
  crosshairs();
  scene=new THREE.Scene();
  scene.name = "scene";
  setCamera();
  
  const light=new THREE.DirectionalLight(0xffffff);
  light.position.set(10,20,30);
  scene.add(light)
  scene.add(new THREE.AmbientLight(0xffffff));
  
  controls = new OrbitControls( camera, renderer.domElement );
	controls.listenToKeyEvents( window ); // optional

//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	controls.dampingFactor = 0.05;
	controls.screenSpacePanning = false;
	controls.minDistance = 100;
	controls.maxDistance = 500;
	controls.maxPolarAngle = Math.PI / 2;
//creates objects	
	pairAssembler(cfig.coupled);
//creates elements
 // elements();
}

function pairAssembler(node) {
   var set,pairs,ind,i,v,pair,pname,cnode,pobj,cobj,cset;
   set = $.extend(true,{},nset["2"]);
   pairs = [[node,"scene"]];
   ind = 0;
   aCompile();
   function aCompile(){
      cnode = pairs[ind][0];
      cset = set[cnode];
      if(cset.link){
         $.each(cset.link,function(i,v){
          pairs.push([v,cnode]);
        });
      }
      aPass();
      function aPass(){
         ind += 1; 
         if(!pairs[ind]){
         topDown(pairs,0);
           return;
         }
         if(set[pairs[ind][0]].link){
            aCompile(); 
         }  
         else{
            aPass();
         }
      }     
   }
}
 
function topDown(pairs,ind){
  if(!pairs[ind]){
    pairs.reverse();
    bottomUp(pairs,0);
    return;
  }
  var pnode = pairs[ind][1];
  var cnode = pairs[ind][0];
  var pobj = scene.getObjectByName(pnode);
  if(!pobj){
    pobj = new THREE.Group();
    pobj.name = pnode;
  }
  if(nset[cnode].Type === "Product"){
     var cobj = new THREE.Object3D();
     cobj.name = cnode;
     pobj.add(cobj);
     product(cobj,cnode, pairs,ind,true);
  }
  else{
    var cobj = new THREE.Group();
    cobj.name = cnode;
    pobj.add(cobj);
    ind += 1;
    topDown(pairs,ind);
  }
}

function elements(){
  $.each(nset.Elements.link, function(i,v){
    var cobj = new THREE.Object3D();
    cobj.name = v;
    product(cobj,v);
    scene.add(cobj);
    console.log(scene);
  });
}

function product(cobj,cnode,pairs,ind,repeat){
  var v,vs,path,dae;
	v = nset[cnode];
	vs = v.shared;
	path = "../" +vs.Source + vs.Product +vs.Extension;
	var loader = new ColladaLoader();
	loader.load(path,
		function(collada){
			dae = collada.scene;
			var sc = 25.4;
			dae.scale.set(sc,sc,sc);
      dae.name = "p"+cnode;
      cobj.add(dae);
      if(repeat){
        ind += 1;
        topDown(pairs,ind);
      }
      else{
        return dae;
      }
    }
	)
}

function setCamera(){
  //var ocam=new THREE.OrthographicCamera(w/-16,w/16,h/16,h/-16,1,10000);
  var ocam=new THREE.OrthographicCamera(w/-2,w/2,h/2,h/-2,-200,1000);
  var pcam=new THREE.PerspectiveCamera(75,w/h,-200,1000);
  camera=mset.camera.type==="Perspective"? pcam:ocam;
  camera.name="camera";
  var p=mset.camera.position[mset.camera.type];
  camera.position.set(p[0],p[1],p[2]);
  camera.lookAt(scene.position);
}

function animate(){
  requestAnimationFrame(animate);
  controls.update();
  render();
}

function render(){
	renderer.render(scene,camera);
}

function raycast( e ) {
  var intersects,par,node;
  e.preventDefault();
  mouseVector.x = ( e.clientX / window.innerWidth ) * 2 - 1;
  mouseVector.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera( mouseVector, camera );
  intersects = raycaster.intersectObjects(scene.children, true);
  if (intersects.length>0){
   obj = intersects[ 0 ].object;
   if(obj.name.charAt(0) === "h"){
     node = obj.name.slice(1);
    }
    else{
      par = obj.parent;
      node = par.parent.name; 
      while(isNaN(node)){
        par = par.parent;
        node = par.parent.name;
      }
    }
    return node;
  }
}
var resetTBA = false;

function mouseDown( e ) {
  var node = raycast(e);
  if(node){
    var html = node +": " +nset[node].Label;
    $("#productRef").html(html);
    if(resetTBA){
  //opener.postMessage(par.parent.userData.node,mfig.tgt);
    }
  }
}

function mouseUp( e ) { 
  e.preventDefault();
  //camera position
  var pos = camera.position;
  var p = [];
  $.each(xyz,function(i,v){
    p[i] = Math.round(pos[v]);
  });
  mset.camera.position
  $("#camPos").html(p.join(","));
}

export {lert, nset, mset, cfig, scene, camera, xyz, product} 