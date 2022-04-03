function myjson(){
  lert("updating json",null,1)
  jun22 = '19ussh';
  id = jun22;
  data = JSON.stringify(nset);
  $.ajax({
    url:"https://api.myjson.com/bins/"+id,
    type:"PUT",
    data:data,
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
        $("#myjson").css("color","lightgreen");
        lert("json updated");
    }
  });     
}

var popup;

function modeler(){
   $("#mset").show();
   lert("",null,1);
   var params = [
    'height=548',
    'width=500'
  ].join(',');
  var file = top.src === 'localhost'? 'Model/model.html': 'http://glasier.hk//TBA%20workshop%202021/Model/model.html';
   if(popup){
    popup.updater(cfig.node);
    popup.focus();
  }
  else{
    popup = window.open(file,'workshop', params);
    popup.moveTo(100,0);
    popup.onbeforeunload = function(){
      popup = null }
    }
  }
var lert = top.lert;

top.addEventListener("beforeunload", function (event){
  popup.close();
});
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  var ed,nb;
  ed = event.data;
  nb = typeof ed === "string"? ed : nb[0];
  tgt = top.src;
  var file = top.src === 'localhost'? 'model.html': 'http://glasier.hk//TBA workshop 2021/Model/model.html';
  switch(nb){
    case "Ready":
      lert("MESSAGE PROTOCOL",null,1);
      lert(file +": Requesting nset from " +top.src);
      popup.postMessage(nset, popup);
      lert(top.src +": Sending nset to " +file);
     break;
     default:
     //reruns TBA after model selection not working
      lert("MESSAGE PROTOCOL");
      sel = nset[nb].Label;
      lert(file +': Request refresh for '+sel +' from ' +top.src);
      rerun(nb);
      lert(top.src +': Refocus on '+ sel);
  }
}
 function menu(){
  set = {
    "Monitors":["None","Modeler"]
  }
    lert(set,1,1);
}

function sendStyle(){
  lert("&lt;style&gt;",null,1);
  file = "scriptsShop/style.css";
  $.get(file)
  .done((data, textStatus, jqXHR) => {
     lert(data);
     lert("&lt;\/style&gt;");
     sendScripts();
  })
}

function sendScripts(){
  list = []
  $("#gas").children().each(function(){
    list.push(this.src);
  })
  lert("&lt;script&gt;");
  runGas(list,-1)
}  

function runGas(list,i){ 
  i+= 1;
  if(list[i] === undefined){
    lert("&lt;\/script&gt;");
  }
  else{
    getContents(list,i);
  }
}
  
function getContents(list,i){
  $.get(list[i])
  .done((data, textStatus, jqXHR)=> {
     lert(data);
     runGas(list,i)
  })
}


function labeller(node){
  label = nset[node].Label;
  suff = nset[node].Suffix;
  if(suff){
  label+= " "+suff;
  }
  return label;
}
    
function refresh(){
  var cell,act,l,n,split,c,cc,cn,rn,ct,ind,rlinks,clinks;
  cell = "b2";
  lert("Test spreadsheet cell = "+cell,null,1);
  act = cell.split(":")[0];
  l = []; n = [];
  split = act.split("");
  $.each(split,function(){
    isNaN(this)? l.push(this) : n.push(this);
  })
  c = l[0];
  cc = c.charCodeAt(0);
  cn = parseInt(cc - 65 +1); // A; +1 because A1 is blank;
  rn = parseInt(n.join("")-2);
  ct = cfig.trail;
  ind = $.inArray(cfig.node,ct);
  if(!ct[ind-2]){
    lert("Outside scope of trial");
    return;
  }
  rlinks = nset[ct[ind-2]].link; lert("row links = " +rlinks)
  ct = ct.slice(0,ind-1);
  par = rlinks[rn];
  try{
    clinks = nset[par].link; lert("column links = " +clinks)
    ct.push(rlinks[rn]);
    cfig.node= clinks[cn];
    ct.push(cfig.node);
    cfig.trail = cfig.cutTrail = ct;
    t = labeller(par);
    b = labeller(cfig.node);
    man = cfig.aTrail.manager;
    key = cfig.aTrail.key;
    a = [key,nset[cfig.node][man][key]].join(":");
    lert("Hilites " +[t,b,a].join(" "))
    nRun();
    tRun();
  }
  catch(e){
    lert("outside scope of test sheet");
  }
}

function spread(){
  var ct,ind,colSel,rowSel,parSel,rlinks,unique,rangeArr,sel,i,v,clinks,rEnt,rind,aArr,rArr,cEnt,label,man,key,aEnt;
  ct = cfig.trail;
  ind = $.inArray(cfig.node,ct);
  colSel = cfig.node;
  rowSel = ct[ind-1];
  parSel = ct[ind-2];
  if(!parSel){
    lert("Not enough data to spread",null,1);
    return;
  }
  rlinks = nset[ct[ind-2]].link;
  unique = [];
  rangeArr = []; sel = [];
  $.each(rlinks,function(i,v){
    if(v === rowSel){
      sel.push(i);
    }
    clinks = nset[v].link;
    rEnt = v
    rind = i; aArr = []; rArr = [labeller(v)];
    $.each(clinks,function(i,v){
      if(v === colSel){
        sel.push(i);
      }
      cEnt = v;
      label = labeller(v);
      if(rind <1){
        unique.push(label);
      }
      $.each(unique,function(i,v){
        if(label === v){
          return false;
        }
      })
      man = cfig.aTrail.manager;
      key = cfig.aTrail.key;
      aEnt = nset[v][man][key];
      rArr.push(aEnt);
    })
    rangeArr.push(rArr);
  });
  unique.unshift("");
  rangeArr.unshift(unique);
  lert(rangeArr.join("\n"),null,1);
  tab = labeller(parSel);
  lert("Tab name " +[tab,key].join("!"));
  findSpreadRange(rangeArr,sel);
}

function findSpreadRange(arr,sel){
  var lastRow,lastCol,code,ltr,box;
  lastRow = arr.length;
  lastCol =arr[0].length;
  code = 65 +lastCol -1;
  ltr = String.fromCharCode(code);
  cn = parseInt(sel[1]+1);
  code = parseInt(65 +cn);
  range = "A1:" +ltr +lastRow;
  lert("spreadsheet range = " +range);
  ltr = String.fromCharCode(code);
  rn = parseInt(sel[0]+2);
  box = [ltr,rn].join("");
  lert("hilite box = " +box);
  
 }



