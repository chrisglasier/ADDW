import { lert, nset, cfig, scene, camera, xyz} from './model.js';

import { size, rotation, footprint, divider, margin, enableLayers} from './setters.js';

import * as THREE from 'https://cdn.skypack.dev/three@v0.132.2';

export{ bottomUp, boxer }


function bottomUp(pairs,ind){
  var s,lastX,maxX;
  var pair = pairs[ind];
  
  if(!pair){ 
    scaler();
  return }
  
  var n = nset[pair[0]];
  lastX = 0;
  if(!n.link){    //product
   
    ind +=1;
    bottomUp(pairs,ind);
  }
  else{
    var pobj = scene.getObjectByName(pair[0]);
    var ps = size(pobj);
    
    $.each(n.link,function(i,v){
     
      var cobj = scene.getObjectByName(v);
      var s = size(cobj);
      
      ps = size(pobj);
      var n = nset[v];
      var nd = nset[v].Design;
      
      
      if(n.Type === "Product"){
        //boxer(cobj, "blue");
      }
 /*     
      if(nd.Margin){
        var layer = 1;
        var plane = margin(v,s,nd.Margin,layer,"Margin");
        cobj.add(plane);
      }
*/      
      if(nd.Rotation){ 
        s = size(cobj);
       // lert([n.Label,nd.Rotation])
       //rotation(cobj,nd,s);
      }
/*
      if(nd.Footprint){
       s = size(cobj);
       var plane = footprint(cobj,nd,s);
      // cobj.add(plane);
      }
      
      if(nd.Divider){
          s = size(cobj);
          divider(cobj,nd,s);
      }
      s = size(cobj);
*/      
 
    //lert([n.Label,s[0][0]])
    
    if(i>0){
      
      maxX += s[0][0]/2;
      //if(n.Label === "Bathroom") maxX = 2478+2542/2 +509;
      cobj.position.x = maxX;
      lert([n.Label,"x",parseInt(cobj.position.x),"maxX",parseInt(maxX),"width",parseInt(s[0][0])]);
     // if(n.Type === "Product"){
        maxX += s[0][0]/2;
    //  }
    }
    else{
      
      maxX = s[1][0][1];
      lert([n.Label,"x",parseInt(cobj.position.x),"maxX",parseInt(maxX),"width",parseInt(s[0][0])]);
    }
    
  
    
    
    var adjZ = -ps[0][2]/2 + s[0][2]/2;
    
    cobj.position.z = adjZ; 
    
    

    
    var adjY = cobj.type === "Group"? 0 : ps[0][1]/2-s[0][1]/2;
    
    
    var datum;
    if(nd.Alignment && nd.Alignment.Datum){
      var datum = nd.Alignment.Datum;
      if(datum>0) adjY -= datum;
    }
    cobj.position.y = -adjY;
    });
    
     
/*   
    var offsetX = ps[1][0][0];
    var offsetY = ps[1][1][0];
    
    $.each(pobj.children,function(i,v){
      if(n.link.length>1){
        lert([n.link.length,"par",pobj.name,offsetX,v.name])
       var obj = scene.getObjectByName(v.name);
        v.position.x -= offsetX;
      }
    });
 */   
    ind +=1;
    bottomUp(pairs,ind);
  }
} 
 
function scaler(){ 
 var obj = scene.getObjectByName("Hotel");
  
  var s = size(obj);

  var offsetX = -(s[1][0][0] +s[1][0][1]);
  obj.position.x = offsetX/2;
  var offsetZ = -(s[1][2][0] +s[1][2][1]);
  obj.position.z = offsetZ/2;


  var ww = window.innerWidth;
  var wh = window.innerHeight;
  var sc = Math.min(ww/s[0][0],wh/s[0][2]);
  scene.scale.set(sc,sc,sc);
}

function boxer(obj,color){
  var hbox = new THREE.BoxHelper( obj, color );
  obj.add( hbox );
}