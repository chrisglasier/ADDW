function hDirector(sid,obj,dir){
  if(sid === "zero"){
    if(dir === "right"){
      nset[cfig.node].Label= obj.html();
    }
  }
  
  if(sid === "one"){
      if(dir === "right"){
        if($(obj).hasClass("tools")){
          cfig.atrail = [];
        }
        options();
        aspects();
      }
  }

  if(sid === "two"){
    if($(obj).hasClass("tag")){
      if(dir === "left"){
        tagValues(obj);
      }
    }
    if($(obj).hasClass("tools")){
      if(dir === "left"){
        toolsValues();
      }
    }
    if($(obj).hasClass("menu")){
      if(dir === "left"){
        menuSet(obj);
      }
    }
  }
}

function tagValues(obj){
  let key = $(obj).attr("id");
  
  let value = $(obj).html();
  lert([key,value])
  if(key === "Type"){
    list = rset.keys.Type;
  }
  else if(key === "Genus"){
    type = nset[cfig.node].Type;
    list = rset.extensions[key][type];
  }
  else if(key === "Label"){
    genus = nset[cfig.node].Genus;
    list = rset.extensions[key][genus];
  }  
  else if(key === "Suffix"){
// To be revised   
    label = nset[cfig.node].Label;
    list = rset.extensions[key][label];
  }
  else{
    //Managers
    try{
      list = rset.extensions[key][value];
    }
    catch(e){
      list = ["INPUT"];
    }
  }
  if(!list){
    list = ["input"];
  }
  cfig.list = list;
  menu(key,value);
}

function toolsValues(){
  cfig.list = nset[cfig.node].Tools;
  ind = 0;
  arr = [];
  $.each(cfig.list,function(i,v){
    html = v;
    id = v;
    cl = "menu";
    arr.push([html,id,cl]);
  })
  sid = "two";
  reel(arr,ind,sid);
}
  
function menu(key,value){
  let list,ind;
  list = cfig.list;
  ind = $.inArray(value,list);
  ind =  ind <0? 0 :ind;
  arr = [];
  $.each(list,function(i,v){
    html = v;
    id = v;
    cl = "menu";
    arr.push([html,id,cl]);
  })
  sid = "two";
  let done = reel(arr,ind,sid);
  if(done){
    $("#"+list[ind]).prop("contentEditable",true);
  }
}

function menuSet(obj){
  let value = $(obj).html();
  if(cfig.key === "Tools"){
    
/*  "ListItem","Clone","ListHead","Crosslink","Delete","Number","Aspect","Backtrack"
*/
    try{
      eval("f" + value)();
    }
    catch(e){
      cfig.atrail = [];
      options();
      lert("f"+value +" function not done yet");
    }
  }
  else{
    cfig.key = cfig.atrail[0];
    cfig.value = value;
    cfig.atrail = [cfig.key];
    nset[cfig.node][cfig.key] = value;
    console.log(nset[cfig.node]);
    if(cfig.key !== "Type"){
      //save to rset
    }
  }
  run();
}

function fListHead(){
  let lab = newName();
  let ind = $.inArray(cfig.node,cfig.trail);
  ind +=1;
  cfig.trail.splice(ind,0,lab);
  if(nset[cfig.node].link){
    nset[lab].link = $.extend([],nset[cfig.node].link);
  }
  nset[lab].backtrack = [cfig.node];
  let links  = nset[cfig.node].link;
  nset[cfig.node].link = [lab];

  nset[links[0]].backtrack = [lab];
  cfig.par = cfig.node;
  cfig.node = lab;
  cfig.atrail = ["Type"];
  cfig.key = "Type";
  ind = $.inArray(cfig.node,cfig.trail);
  trailRun(ind,cfig.node);
  let done = run();
  if(done){
    $("#"+ lab).attr("contentEditable",true);
    //selectElementContents($("#"+ lab))
    
  }
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
