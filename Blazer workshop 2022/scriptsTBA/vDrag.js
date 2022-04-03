function runAction(){
  vDrag("zero","y");
  vDrag("one","y");
  vDrag("two","y");

}

function vDrag(rid,axis){
  $("#"+rid).on("mousedown",function(event){
    event.stopPropagation();
  })
  $("#"+rid).draggable({
    axis: axis,
    start:
    function(){
      $(this).children().css("opacity",0.5);
    },
    stop: 
//lock near centre name; return id and class
    function( ) {
      let obj = lock($(this));
      let id = $(obj).attr("id");
     
      if($(obj).hasClass("value")){
        cfig.atrail = [id];
        cfig.key = id;
      }
      if($(obj).hasClass("array")){
        cfig.atrail = [];
        cfig.key = id;
      }
      if($(obj).hasClass("object")){
        cfig.atrail = [];
        cfig.key = id;
      }
      if($(obj).hasClass("menu")){
        //cfig.atrail.push(id);
        cfig.value = id;
        //lert(cfig,1);
      }
      if(!id){
        lert("out of bounds")
        return;
      }
      
      switch(rid){
        case "zero" : 
          cfig.node = id;
          cfig.par = nset[id].backtrack[0];
          let ind = $.inArray(cfig.node,cfig.trail);
          run();         
        break;
        case "one" :
          if($(obj).hasClass("name")){
            nameStop(id);
          }
        break;
        case "two" :
          if(id === "Tools"){
            getTools();
          }
          if($(obj).hasClass("menu")){
            options();
            menu(cfig.atrail[0],id);
          }
          else if($(obj).hasClass("tag")){
            cfig.atrail = [id];
            cfig.key = id;
            options();
            aspects();
          }
          else if($(obj).hasClass("tools")){
            cfig.atrail = [id];
            cfig.key = id;
            options();
            toolsValues();
          }
          else{
            cfig.atrail = [id];
            cfig.key = id;
            options();
            aspects();
          }
        break;  
      }
    }
  })
}

function nameStop(node){
  oldNode = cfig.node;
  cfig.node = node;
  cfig.par = nset[node].backtrack[0];
  let ind = $.inArray(oldNode,cfig.trail);
  setTimeout(
    function(){
      trailRun(ind,node);
      run();
    }
      , 500
    );
}

function trailRun(ind,node){
  let cutTrail = cfig.trail.slice(0,ind);
  cutTrail.push(cfig.node);
  cfig.trail = $.extend([],cutTrail);
  let len,ol;
  while(nset[node] && nset[node].link){
    len = nset[node].link.length;
    ind = nset[node].index? nset[node].index : ind = parseInt(len/2);
    ol = nset[node].link[ind];
    cfig.trail.push(ol);
    node = ol;
  }
}

function sort(id,axis,tf){
  $("#"+id).sortable({
    axis: axis,
    disabled: tf,
    stop: 
    function(){
      nset[cfig.par].link = [];
      $("#"+id).children().each(function(){
        nset[cfig.par].link.push($(this).attr("id"));
      }); 
      run();
    }
  });
}