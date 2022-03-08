 var last,lob;

function sizer(){
      $("#hold").css({
        position: "absolute",
        top:$("#header").height() + "px",
        height:$(window).height()- $("#header").height() + -20 +"px",
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
            val = $("#inp").val();
            $("#inp").val('"' +val +'"');
          break;
          case "Highlight":
            val = $("#inp").val();
            hilite(val);
          break;
         }
      });
    })
      
    function hilite(cl,id){
      try{
        var old = $('#hold a').html();
        var tag = '<a>'+old+'</a>'
        var rgxp = new RegExp(tag, 'g');
        $('#hold').html(function(index,html){
          return html.replace(rgxp,old);
        });
      }
      catch(e){}
      var rpl = '<a>' + cl + '</a>';
      var rgxp = new RegExp(cl, 'g');
      $('#hold').html(function(index,html){
        return html.replace(rgxp,rpl);
      });
      var lob = $('#hold a').first();
      var ot = $("#hold").scrollTop();
      var tp = lob.position().top;

      $("#hold").scrollTop(ot +tp);
    }

//customisable pinnable printable version of alert
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