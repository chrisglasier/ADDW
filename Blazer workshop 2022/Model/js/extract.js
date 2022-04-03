var pobj = scene.getObjectByName(pair[1]);
var cobj = scene.getObjectByName(v);
 
var s = size(cobj);    //3DBox data
var thisX = s[0][0];
lastX = i>0? lastX +thisX/2 : 0;
cobj.position.x = lastX;
s = size(cobj);
lastX = s[1][0][1];

var adjY = cobj.type === "Group"? 0 : ps[0][1]/2-s[0][1]/2;
cobj.position.y = -adjY;

var ps = size(pobj);
var adjZ = -ps[0][2]/2 + s[0][2]/2;
cobj.position.z = adjZ; 