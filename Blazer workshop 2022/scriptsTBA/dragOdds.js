function lock(obj){
//lock to grid   
  var val = $(obj).position().top/d.rh;
  var int = parseInt(val);
  var dec = val - int -0.5;
  var nr = dec < 0? int : int +1;
  $(obj).css("top",(nr-0.5)* d.rh +1);
//find new active   
  let tp = $("#center").height()/2 - (0 + 0.5)*d.rh;
  let ptop = $(obj).position().top;
  let ret = {};
 
  $(obj).children().each(function(i,v){
    let ctop = $(this).position().top;
    if(ptop +ctop === tp){
      ret = $(this); 
    }
  });
 
  return ret;
}

function getTools(){
  let list;
  let type = nset[cfig.node].Type;
  list = rset.keys.action[type];
  if(!list){
    type = "Assembly";
    list = rset.keys.action[type];
  }
  nset[cfig.node].Tools = list;
  
}

function aColors(id){
  switch(id){
    case "Tools": cl = "tools"; break
    case "Type": cl = "tag"; break;
    case "Genus": cl = "tag"; break;
    case "Label": cl = "tag"; break;
    case "Suffix": cl = "tag"; break;
    case "Cat": cl = "tag"; break;
    default: cl = "manager";
  }
  return cl;
} 

function reel(arr,ind,sid){
  if(!ind){ind = 0}
 $("#" +sid).empty();
  let tp = $("#center").height()/2 - (ind + 0.5)*d.rh;
  $("#"+sid).css("top",tp);
  let html,label,suffix,cl,op;
  $.each(arr,function(i,v){
    html = v[0];
    let id = v[1];
    cl = v[2];
  //opacity grading
    incr = (ind-i)/5;
    op = incr > 0? 1- incr: 1+incr ;
    
    $("#"+sid).append($(document.createElement("li"))
      .html(html)
      .attr("id",id)
      .attr("class",cl)
      .attr("title",[id,cl])
      .css({
        height:d.rh +"px",
        lineHeight:d.rh +"px",
        opacity:op
        
      })
    )
    if(i === ind){
      let cl = "m"+sid;
      let obj = $("#" +id)
      obj.addClass(cl);
      cl = obj.attr("class");
      obj.attr("title",[id,cl]);
      if(obj.hasClass("menu")){
        cfig.value = id;
      }
      obj.on("mousedown",function(event){
        event.stopPropagation();
      })
      obj.draggable({
        axis: "x",
        drag:
        function(){
          let left = $(this).position().left;
          let dir = left <0? "left" : "right";
          if(dir === "left"){
            if(left > 0){
              $(this).css("left",0);
            }
          }
        },
        stop: 
        function( ) {
          let left = $(this).position().left;
          let dir = left <0? "left" : "right";
          hDirector(sid,obj,dir);
          $(this).css("left",0);
        }
      })
    }
  })
  return true;
}

