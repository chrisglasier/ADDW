import * as THREE from 'https://cdn.skypack.dev/three@v0.132.2';
import { lert, nset, scene, xyz, product } from './model.js';
import { mset } from './mset.js';
import { boxer } from './adjusters.js';

function size(obj){
 var cbox = new THREE.Box3().setFromObject(obj);
  const size = new THREE.Vector3();
  var s = cbox.getSize(size);
  var sarr = [s.x,s.y,s.z];
  var marr = [];
  marr[0] = [cbox.min.x,cbox.max.x];
  marr[1] = [cbox.min.y,cbox.max.y];
  marr[2] = [cbox.min.z,cbox.max.z];
  return [sarr,marr];
}

function setPlane(obj,s,l,name){
  var i,color,opacity;
  var geometry = new THREE.PlaneGeometry(s[0][0],s[0][2]);
  
  switch(name){
    case "Margin": 
      color = "red";
      opacity = 0.2;
    break;
    case "Footprint": 
      color = "green";
      opacity = 0.1;
    break;
    case "Divider": 
      color = "magenta";
      opacity = 0.1;
    break;
    case "Enclosure": 
      color = "blue";
      opacity = 0.1;
    break;
  }
  var material = new THREE.MeshBasicMaterial( {
    color: color,
    transparent: true,
    opacity: opacity,
    side: THREE.DoubleSide
  });
  var plane = new THREE.Mesh(geometry, material)
  var rot = [90,0,0];
  $.each(xyz,function(i,v){
    plane.rotation[v] = rot[i] *Math.PI /180;
  });
  plane.position.y = -s[0][1]/2 - l;
  if(l){
    if(!mset.layers[l]){
      mset.layers[l] = [];
    }
    mset.layers[l].push(name);
  }
  //lert(mset.layers,1);
  return plane;
}

function margin(node,s,f,l,name){
  s[0][0] += f[0] +f[1];
  s[0][2] += f[2] +f[3];
  var plane = setPlane(node,s,l,name);
  return plane;
}

function rotation(cobj,nd,s){
  $.each(xyz,function(i,v){
    cobj.rotation[v] = nd.Rotation[i] *Math.PI /180;
  });
}

function footprint(cobj,nd,s){
  var plane;
  var f = nd.Footprint; 
  var layer = 2;
  var name = "Footprint";
  
  var obj = scene.getObjectByName(f.Focus);
  var s = size(obj);
 
  s[0][0] += f.Dims[1] +f.Dims[3];
  s[0][2] += f.Dims[0] +f.Dims[2];
  var plane = setPlane(cobj.name,s,layer,name);
  var offsetX = 0;
  var offsetZ = 0;
  if(f.Dims[1] !== f.Dims[3]){
      offsetZ = f.Dims[1]> f.Dims[3]? -f.Dims[1] : f.Dims[1];
    }
  if(f.Dims[0] !== f.Dims[2]){
       offsetZ = f.Dims[0]> f.Dims[2]? f.Dims[0] : -f.Dims[0];
    }
  plane.position.x += 1200//offsetX/2; 
  plane.position.z += offsetZ/2; 
  return plane;
}
 //MOCKUP
var eset = { 
  "East": {
    "Rotation" :[0,90,0],
    "Thickness" : 150,
    "Height" : 2500,
    "Position": {
      "x": 1300,
      "z": 950
    }
  }
}

function divider(cobj,nd,s){
  var e = eset["East"];
  var ename = "e1";
  var eobj = scene.getObjectByName(ename);
  var clobj = eobj.clone();
  cobj.add(clobj);
  eobj.visible = false;
  var rot = e.Rotation;
  var x = e.Thickness/1000;
  var y = e.Height/1000;
  var z = s[0][2]/1000;
  clobj.scale.set(x,y,z);
//rotation
  $.each(xyz,function(i,v){
    clobj.rotation[v] = rot[i] *Math.PI /180;
  });
  clobj.position.x = e.Position.x;
  clobj.position.y = -s[0][1]/2;
  clobj.position.z = e.Position.z;
}   

function enableLayers(){
  $.each(mset.layers,function(k,v){
    nr = parseInt(k);
    camera.layers.enable(nr);
    $.each(v,function(k,v){
      obj = scene.getObjectByName(v);
      obj.position.z -= nr;
    });
  }); 
}

export {size, rotation, footprint, divider, margin, enableLayers}