/*
Every new nset entry is given its node (machine id) as a clode (clone node).

Every nset with matching node and clone is a potential progenitor of clones. When cloning the node changes but not clode. This passes the progenitor clode whether it is in the display or not.

Each clone encountered in a set of links uses its clode (progenitor) to create new nsets (it could be the progenitor itself). This means cloning a nset in the middle of a set of links uses the progenitor rather than cloning a clone. This is most important for 3D objects that are cloned recursively by default.

When any nset is changed, if clode same as node, option to change all, or make new clone new progenitor for all the remaining using its node as their clodes. Otherwise, it becomes new progenitor with its clode set as its node.

*/
function fListHead(id){
  var node,lab,arr,ind;
  node = cfig.node;
  lab = newName(id,node);
  cfig.cutTrail.push(lab);
  arr = cfig.trail
  ind = $.inArray(node,arr);
  arr.splice(ind +1,0,lab); 
  if(nset[node].link){
    set[lab].link = $.extend([],nset[node].link);
  }
  nset[node].link = [lab];
  nset[lab].index = 0;
//this is to pass on clone ref; clone === node = progenitor
  nset[lab].clode = lab;
  cfig.node = lab;
  cfig.aTrail.key = "Genus";
  cfig.toggle-["Aspects,Names"];
  tRun();
  nRun();
  down("t" +lab,1); 
}

function fListItem(id){
  var nt,par,lab,arr,ind;
  nt = cfig.cutTrail;
  par = nt[nt.length-2];
  lab = newName(id,par,"item");
//this is to pass on clone ref; clone === node means master
  nset[lab].clode = lab;
  arr = nset[par].link;
  ind = $.inArray(cfig.node,arr);
  arr.splice(ind +1,0,lab); 
  cfig.aTrail.key = "Type";
  nRun();
  tRun();  
}  

function fCrosslink(act,id,cell){
  var nr,pid,tar,cxt,h,html;
  atv = cfig.aTrail.value;
  if(act){
    atv.push(id);
  }
  nr = atv.length -1
  switch(nr){
    case 0:
      linkOptions(id,1);
      crosslinkContexts(id,2);
    break;
    case 1:
      if(id !== atv[1]){
        shifter(cell);
      }
      else{
        arr = [];
        $.each(nset,function(k,v){
          if(v.Genus === id){
          arr.push(k);
          }
        });
        arr.unshift("All");
        s = nset.Assembler.style;
        ind = Math.floor(d.foc /d.rh) -1;
        domArr("w",ind,arr,1);
        domArr("a",ind,arr,2);
        $("#stack2").children().each(function(){
          $(this).html("");
        });
      }
    break;
    default:
    if(act){
      html = cell.html();
      op = cell.attr("id").charAt(0);
      np = op === "a"? "w" : "a";
      if(id === "All"){
        par = op === "a"? 1 : 2;
        $("#stack" +par).children().each(function(){
          cid = $(this).attr("id");
          pre = cid.charAt(0);
          id = cid.slice(1);
          html = $(this).html();
          if(html === ""){
            $(this).html($("#" +op+id).html());
            $("#" +op+id).html("")
          }
        });
        $("#"+ op +"All").html("All");
      }
      else{
        $("#" +np +id).html(html);
        cell.html("");
        $("#wAll").html("All");
      }
      aFinish();
    }
    else{
      shifter(cell);
    }
  }  
}

function fClone(){
  var nt,node,par,ind,nn,label,count,pairs;
  nt = cfig.cutTrail;
  node = cfig.node;
  par = nt[nt.length-2];
  ind = $.inArray(node,nset[par].link);
  nn = newLab();
  cn = nset[node].clode;
  nset[nn] = $.extend(true,{},nset[cn]);
  nset[nn].Backtrack = [par];
  nset[nn].Suffix = nset[par].link.length +1;
  nset[par].link.splice(ind +1,0,nn);
  nt[nt.length-1] = nn;
  cfig.cutTrail = nt;
  if(nset[node].link){
    ind = 0;
    pairs = [[nn]];
    compile(pairs,ind);
  }
  cfig.node = nn;
  cfig.links = true;
  nRun();
  tRun();
  tide();
}
  
 function compile(pairs,ind){
  var n,links,i,v,nn;
  n = pairs[ind][0];
  if(nset[n].link){
    links = nset[n].link;
    $.each(links,function(i,v){
      pairs.push([v,n]);
    });
    if(cfig.aTrail.fun !== "Delete"){
      nset[n].link = [];
    }
    pass(pairs,ind);
    function pass(pairs,ind){
      var pair,nn;
      ind += 1;
      if(!pairs[ind]){
        newTrail(cfig.node);
        return;
      }
      pair = pairs[ind];
      //deleting
      if(cfig.aTrail.fun === "Delete"){
        nset[pair[0]].deleted = true;
      }
      //cloning
      else{
        nn = newLab();
        nset[nn] = $.extend(true, {}, nset[pair[0]]);
        nset[nn].Backtrack[0] = pair[1];
        nset[pair[1]].link.push(nn);
        pairs[ind][0] = nn;
      }
      if(nset[pair[0]].link){ 
        compile(pairs,ind);
      }
      else{
        pass(pairs,ind);
      }
    }
  }
} 
  
  
  
//NOT USED
function fCloneAll(act,id,cell){
fClone(act,id,cell,links);
}
//NOT USED
function fCloner(act,id,cell,links){
var nt,node,par,ind,nn,label,count,pairs;
nt = cfig.cutTrail;
node = cfig.node;
par = nt[nt.length-2];
ind = $.inArray(node,nset[par].link);
nn = newLab();
nset[nn] = $.extend(true,{},nset[node]);
nset[nn].Backtrack = [par];
label = nset[nn].Label.split(" ")[0];
count = nset[par].link.length +1;
nset[nn].Label = [label,count].join(" ");
nset[nn].clone = node;
nset[par].link.splice(ind +1,0,nn);
nt[nt.length-1] = nn;
cfig.trail = cfig.cutTrail = nt;
if(links){
ind = 0;
pairs = [[nn]];
compile(pairs,ind);
}
cfig.links = true;
nRun();
tRun();
}

function fDelete(cell,id){
var nt,par,pLink,node,ind,ent,pairs;
/*
//disabled for demos
//remove from parent links
nt = cfig.cutTrail;
par = nt[nt.length-2];
pLink = nset[par].link;
node = cfig.node;
ind = $.inArray(node,pLink);
pLink.splice(ind,1);
nset[node].deleted = true;
//remove pivot Backtracks not yet reveiwed
if(nset[node].Type === "Crosslink"){
links = nset[node].link;
$.each(links, function(i,v){
ind = $.inArray(node,nset[v].Backtrack);
if(ind >-1){
nset[v].Backtrack.splice(ind,1);
}
});
}
//markup all descendant links for purging
else if(nset[node].link){
pairs = [[node]];
compile(pairs,0);
}
//reset node and trails
if(pLink.length > 0){
cfig.links = true; //keeps links menu in stack2
ind = pLink[ind -1]? ind -1 : 0;
ent = pLink[ind];
cfig.node = ent;
nt[nt.length-1] = ent;
cfig.trail = cfig.cutTrail = nt;
}
else{
cfig.links = false; //allows removal of link menu
delete nset[par].link;
cfig.node = par;
cfig.trail = cfig.cutTrail = nt.slice(0,-1);
}
nRun();
tRun();
*/
}

function fNumber(act,id,cell){
var nt;
nt = cfig.cutTrail;
par = nt[nt.length-2];
links = nset[par].link;
suffix = nset[links[0]].Suffix;
nr = suffix? suffix : 1;
$.each(links,function(i,v){
nset[v].Suffix = parseInt (nr);
nr +=1;
});
cfig.links = true;
nRun();
tRun();
}

function fAspect(id,cell){
top.trace("fAspect","Assembler");
cfig.links = true;
node = cfig.node;
cont = nset[node].Genus;
/*
linkOptions(id,1);
ind = -1;
keyOptions(id,ind);
cfig.aTrail.fun = "Key2";
*/
}

function fKey2(id,cell){
editor(cell);
}



function fPurge(act,id,cell){
if(act){
$.each(nset,function(k,v){
if(v.hasOwnProperty("deleted")){
delete nset[k];
//purge Backtrack link array
}
});
cell.html("Purged");
}
else{
cfig.links = true;
//selection to focus line
linkOptions(id,2);
nRun();
tRun();
}
}

function fTest1(cell,id){
  fTest(cell,id);
}
  
 function fTest2(cell,id){
  fTest(cell,id);
} 
  
 function fTest(cell,id){
  node = cfig.node;
  val = nset[node].Trail[id]=== "Pass"? "Fail" : "Pass";
  nset[node].Trail[id] = val;
  nRun();
}
  
  
  