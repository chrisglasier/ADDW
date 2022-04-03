function down(e,demo){
   var cell,id,cl,val;
  cfig.links = false;
 //demo or real
   cell = typeof e === "string"? $("#"+e) : $(e.target);
   if(cell.prop("tagName") === "SPAN"){
      cell = cell.parent();
   }
   if(cell.parent().attr("id")!== "aspectTrail"){
      $("#aspectTrail").empty();
   }
   id = cell.attr("id");
   cl = cell.attr("class");
   top.hilite(cl,id);
   $("#box").hide(); 
   switch(cl){
      case "Trail": trailDown(cell,demo); break;
      case "Atrail":aTrailDown(cell,demo);break;
      case "Name": nameDown(cell,demo); break;
      case "Crosslink": nameDown(cell,demo); break;
      default: manAspects(cell,id,cl);
   }
}

function trailDown(cell,demo){
   var node;
   //$("#remote").empty().hide();
   //cell.css("color","red");
   node = cell.attr("name");
   if(node === "Couplers"){
      cfig.cutTrail = ["Couplers"];
      cfig.Trail = cfig.cutTrail;
      cfig.node = "Couplers";
      nRun();
      tRun();
      return;
   }
   cfig.node = node;
   ind = $.inArray("Aspects",cfig.toggle);
   nind = ind === 0? 1 : 0;
   nnt = nset[node].Type;
   cl = "Crosslink"; n = "Names";
   if(nnt === cl  || cell.attr("class") === cl){
      ct = cl;
   }
   else{
      ct = n;
   }
   cfig.toggle[nind] = ct;
   if(cfig.toggle[0] === "Names"){
      bl = nset[node].Backtrack[0];
      links = nset[bl].link;
      ind = $.inArray(node,links);
      nset[bl].index = ind;
      newTrail();
      ind = $.inArray(node,cfig.trail)
      cfig.cutTrail = cfig.trail.slice(0,ind +1);
      tRun();
      nRun();
      tide();
   }
   else{
      ind = cell.index();
      cfig.cutTrail = cfig.trail.slice(0,ind +1);
      nRun();
      tide();
   }
}


function aTrailDown(cell,demo){
  var id,at,ind,arr;
   id = cell.attr("id").slice(1);
   at = cfig.aTrail.device;
   ind = $.inArray(name,at);
   at = at.slice(0,ind);
   cfig.aTrail.device = at;
   aRun();
   ind = $.inArray(id,menu);
   arr = addClasses(menu,"Device");
   domArr(ind,arr,2);
}

function updateMonitors(node){
   var fun;
   $(".hold iframe",top.document).each(function(){
      fun = $(this)[0].contentWindow.update;
      if(fun && typeof fun === "function") fun(node);
   });
}

function nameDown(cell,demo){
   var node,par,nt,ind;
   node = cell.attr("id");
  if(node === "Couplers"){
    
    
    
    
    
      return;
  }
   if(nset[node].Type === "Coupler" && node !== cfig.node){
      //changeCoupler(node);
//pending changeCoupler
      //cfig.cutTrail = ["Couplers", node];
      //cfig.node = cfig.coupled = node;
      //tRun();
      //nRun();
   }
   else{
      ind = $.inArray("Aspects",cfig.toggle);
      nind = ind === 0? 1 : 0;
      xl = "Crosslink"; n = "Names";
      nnt = nset[node].Type;
      if(nnt === xl){
         if(!cfig.crosslink){
            cc = cfig.crosslink = {};
         }
         cc.Genus = nset[node].Keyword;
      }
      if(nnt === xl  || cell.attr("class") === xl){
            ct = xl;
      }
      else{
         ct = n;
      }
      cfig.toggle[nind] = ct;
      nt = cfig.cutTrail;
      par = cell.parent().attr("id");
//output generated regardless of focus 
      if(par === "stack1"){
         pode = nt[nt.length-2];
         if(node === cfig.node){
            cfig.toggle.reverse();
            nRun();
            return;
         }
         else{
            nt = nt.slice(0,-1);
            nt.push(node);
         }
      }
      else{
         pode = nt[nt.length-1];
         nt.push(node);
      }
      nset[pode].index = cell.index();
      cfig.node = node;
      cfig.cutTrail = nt;
      newTrail();
      nRun();
      tRun();
   }
}



function changeCoupler(node){
   var last,coupler;
   /*
   last = bfig.coupler;
   coupler = node;
   cfig.cutTrail = ["Couplers"];
   node = "Couplers";
//split nset bset pset
   bset = {}; pset = {};
   $.each(nset,function(k,v){
      if(v.hasOwnProperty("Type") && v.Type === "System"){
         bset[k] = v;
      }
      else{
         pset[k] = v;
      }
   });
//save pset
   path = nset[last].Location;
   //macSave(pset,path);
//new pset
   path = nset[coupler].Location;
   txt = fs.readFileSync(path, 'utf-8');
   pset = JSON.parse(txt);
//add to bset
   nset = $.extend({}, bset, pset);
   nset[coupler].link = pset.cfig.link;
   $.each(pset.cfig.link,function(i,v){
      nset[v].Backtrack = [coupler];
   });   
   cfig = nset.cfig;
//storeSave();
   cfig.store = nset[coupler].Store;
   //rset = storeGet();
   bfig.coupler = coupler;
   bfig.monitor = pset.cfig.active;
//runoff 
   cfig.node = node;
   //nRun();
   //tRun();
   */
}

   
