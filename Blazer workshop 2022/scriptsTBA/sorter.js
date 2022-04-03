$("#stack1").sortable({
  stop: function(event, ui) {
    var par,id;
    par = cfig.cutTrail[cfig.cutTrail.length-2];
    nset[par].link = [];
    $(this).children().each(function(){
      nset[par].link.push($(this).attr("id"))
    });
    id = ui.item.attr("id");
    down(id);
  }  
})

