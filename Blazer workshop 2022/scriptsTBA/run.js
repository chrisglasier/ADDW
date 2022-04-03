function setup(){
  let tset = {}
  $.each(nset,function(k,v){
    tset[k] = {};
    tset[k].Tools = [];
    let obj = nset[k];
    tobj = tset[k];
    $.each(obj,function(k,v){
      tobj[k] = obj[k];
    })
  })
  nset = tset;
  run();
  runAction();
}

function run(){
  trail();
  options();
  aspects();
  return true;
}
  
function trail(){
  var links,arr,label,suffix,html,sid;
  ind = $.inArray(cfig.node,cfig.trail);
  ind-= 1;
  arr = [];
  $.each(cfig.trail,function(i,v){
    if(i === 0) return;
    if(nset[v]){
      label = nset[v].Label;
      suffix = nset[v].Suffix;
      html = suffix? label+suffix:label;
      cl = "name";
    }
    else{
      html = v;
      cl = aColors(v);
    }
       
    id = v;
    arr.push([html,id,cl])
  });
  sid = "zero";
  reel(arr,ind,sid);
}

function options(){
  var links,arr,label,suffix,html,sid;
    if(!cfig.par){
      return
    };
    links = $.extend([],nset[cfig.par].link);
   // lert(links);
    ind = $.inArray(cfig.node,links);
    links.splice(ind,1);
    links= links.concat(cfig.atrail);
    arr = [];
    $.each(links,function(i,v){
      let at = cfig.atrail;
      let atl = at[at.length-1];
      if(nset[v]){
        label = nset[v].Label;
        suffix = nset[v].Suffix;
        html = suffix? label+suffix:label;
        id = v;
        cl = "name";
      }
      else{
        html = v;
        id = "key";
        cl = aColors(cfig.atrail[0]);
      };
      
      arr.push([html,id,cl]);
      if(v === atl){
         ind = i;
      }
    });
  sid = "one";
  reel(arr,ind,sid);
}

function aspects(){
  let at0 = cfig.atrail[0];
  getTools();
  let obj = nset[cfig.node];
  let i = 0;
  let arr,ind,cl;
  arr = [];
  
  $.each(obj,function(k,v){
  //skip system keys (lowercase first letter)
    if(k.charAt(0) === k.charAt(0).toUpperCase()){
      if(k === at0){
        ind = i;
      }
      cl = aColors(k)
      if($.isArray(v)){
        cl +=" array";
      }
      else if(v instanceof Object){
        cl +=" object";
      }  
      else{ 
        cl +=" value";
      }
      html = typeof(v) === "object"? k : v;
      id = k;
      arr.push([html,id,cl]);
      i +=1;
    }
  });
  sid = "two";
  reel(arr,ind,sid);
}
