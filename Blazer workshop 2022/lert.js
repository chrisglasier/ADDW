 var last,lob;

function sizer(){
  $("#hold").css({
    position: "absolute",
    top:$("#header").height() +60 + "px",
    height:$(window).height()- $("#header").height() + -80 +"px",
    overflow:"auto"
  });
}

function color(cell){
  var par = cell.parent();
  par.children().css("color","initial");
  cell.css("color","red");  
}

$(document).ready(function(){
  sizer();
  $("#inp").val("Label");
  $("#reports")
  .mousedown(function(e){
    var cell = $(e.target);
    $("#hold").scrollTop(0);
    color(cell);
    html = cell.html();
    save(html);
   });
  $("#box")
  .mousedown(function(e){
  var cell = $(e.target);
  color(cell);
  html = cell.html();
  val = $("#inp").val();
  switch(html){
    case "Clear all":
    $("#hold").html("");
    $("#inp").val("");
    $("#reports,#box").children().css("color","initial");
    break;
    case "Clear box":
    $("#inp").val("");
    break;
    case "Nodify":
      $("#inp").val('"' +val +'":');
    break;
    case "Highlight":
      hilite(val);
    break;
   }
  });
})
  
function hilite(id){
  let newText;
  let text = $('#hold').text();
//clear any old highlights  
  try{
    let word = $('#hold a').text();
    let tag = '<a>'+word+'</a>'
    newText = text.replaceAll(tag,old);
  }
  catch(e){}
//new highlights  
  newText = text.replaceAll(id,"<a>"+id +"</a>");
  $('#hold').html(newText)
//first highlight
  let lob = $('#hold a').first();
  let ot = $("#hold").scrollTop();
  let tp = lob.position().top;
  $("#hold").scrollTop(ot +tp);
}

//customisable pinnable printable version of alert/console.log
function lert(set,switcher,single,scroll){
  var hold,html,k,v,i,val,str;
  hold  = $("#hold");
  if(single){
//clear all previous 
    html = "";
  }
  else{
    html = $(hold).html();
    html += "\n";
  }
  if(switcher){
    try{
      html += macStringify(set,2);
    }
    catch(e){
      arr = [];
      for(n in set){
    arr.push(n +":" +set[n]); 
      }
      html += arr.join("\n");
    }
  }
  else{
    html += set +"\n";
  };
  hold.html(html);
  if(scroll){
    var height = hold[0].scrollHeight;
    hold.scrollTop(height);
  }
};