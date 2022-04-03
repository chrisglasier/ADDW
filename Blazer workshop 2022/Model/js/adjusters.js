import { lert, nset, cfig, scene, camera, xyz} from './model.js';

import { size, rotation, footprint, divider, margin, enableLayers} from './setters.js';

import * as THREE from 'https://cdn.skypack.dev/three@v0.132.2';

export{ bottomUp, boxer }


function bottomUp(pairs,ind){
  var s,lastX;
  var pair = pairs[ind];
  
  if(!pair){ 
    scaler();
  return }
  
  var n = nset[pair[0]];
  
  if(!n.link){          //product
    ind +=1;
    bottomUp(pairs,ind);
  }
  else{
    var pobj = scene.getObjectByName(pair[1]);
    var ps = size(pobj);
    
    $.each(n.link,function(i,v){
      
      var cobj = scene.getObjectByName(v);
      var s = size(cobj);
      
      var nd = nset[v].Design;
      
      if(v === cfig.node){
        boxer(cobj, "blue");
      }
      if(nd.Margin){
        var layer = 1;
        var plane = margin(v,s,nd.Margin,layer,"Margin");
        cobj.add(plane);
      }
       
      if(nd.Rotation){ 
        s = size(cobj);
        rotation(cobj,nd,s);
      }
      
      if(nd.Footprint){
        s = size(cobj);
       var plane = footprint(cobj,nd,s);
       cobj.add(plane);
      }
      
      if(nd.Divider){
          s = size(cobj);
          divider(cobj,nd,s);
      }
      
        
      var thisX = s[0][0];
      lastX = i>0? lastX +thisX/2 : 0;
      cobj.position.x = lastX;
      s = size(cobj); 
      lastX = s[1][0][1];
      
      var adjZ = -ps[0][2]/2 + s[0][2]/2;
      cobj.position.z = adjZ; 

      var adjY = cobj.type === "Group"? 0 : ps[0][1]/2-s[0][1]/2;
      var datum;
      
      if(nd.Alignment && nd.Alignment.Datum){
        var datum = nd.Alignment.Datum;
        if(datum>0){
          adjY -= datum;
        }
      }
      cobj.position.y = -adjY;
      
    });


      /*
      var offsetX = ps[1][0][0];
      var offsetY = ps[1][1][0]
      $.each(pobj.children,function(i,v){
        if(n.link.length>1){
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
 var obj = scene.getObjectByName("2");
  
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