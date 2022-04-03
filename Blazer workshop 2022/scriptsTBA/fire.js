function fireTag(cell,id){
   var ret,arr,nr;
   node = cfig.node;
   
   cfig.aTrail.key = id;
   ret = aspects(node);
   domArr(ret[0],ret[1],1);
   ret = options(node,id);
   word = nset[node][id]; 
   ind = $.inArray(word,ret[0]);
   domArr(ind,ret[1],2);
   if(id !== "Type"){
      $("#box").show();
      $("#inp").val(word);
   }
}

function fireOption(cell,id){
   var ret,arr;
   node = cfig.node;
   asp = cfig.aTrail.key;
   ret = options(node,asp);
   ind = cell.index();
   domArr(ind,ret[1],2);
   if(asp !== "Type"){
      $("#box").show();
      $("#inp").val(cell.html());
   }
   else{
         nset[node][asp] = id;
         $("#" +asp +" span:first").html(id);
   }
}  

function butDown(){
   var asp,val,nn;
   asp = cfig.aTrail.key;
   val = $("#inp").val();
   if(!isNaN(val)) val = parseInt(val);
   nn = nset[cfig.node];
   nn[asp] = val;
   $("#" +asp +" span:first").html(val);
   $("#box").hide();
   //updateStore(nn.Type,asp,val);
   nRun();
   if(asp === "Label")  tRun();
}

function fireLink(cell,id){
   var node,ret,word,ind;
   if(id === "Backtrack"){
   //pending development   
      cfig.aTrail.key = id;
      nRun();
      return;
   }
   cfig.aTrail.key = id;
   cfig.aTrail.fun = id;
   node = cfig.node;
   ret = aspects(node);
   domArr(ret[0],ret[1],1);
   ret = linkArr();
   //lert("linkArr")
   //lert(ret,1)
   ind = Math.floor(ret[0].length/2);
   cfig.aTrail.fun = ret[0][ind];
   domArr(ind,ret[1],2);
}

function fireLink1(cell,id){
  var cpld = cfig.coupled;
  
/*   
   if(id === cfig.aTrail.fun){
      try{
         eval("f"+id)(cell,id);
      }
      catch(e){
         console.log(e)
      }
   }
   else{
      ret = linkArr();
      ind = $.inArray(id,ret[0]);
      domArr(ind,ret[1],2);
      cfig.aTrail.fun = id;
   }
*/
}  

function fireManager(cell,id){
  var ct,ft,url;
	var ct = cell.offset().top -1;
  var ft = bfig.dims.foc * bfig.dims.bh;
  if(ct === ft){
    cfig.aTrail.device = [id];
    cfig.aTrail.key = id;
    if(id === "Design"){
      url = "Model/model.html";
      lert("Demonstration - not linked to TBA selection yet",null,1);
    }
    else{
      lert(id +" output not yet created",null,1);
      url = "Output.html";
    }
    top.openOutput(url);
   }
   else{
    cfig.aTrail.key = id;
    cfig.aTrail.manager = id;
    nRun();
   }
}

function fireKey(cell,id){
   var ret,arr;
   if(id === cfig.aTrail.key){
      try{
         eval("f"+id)(cell,id);
      }
      catch(e){
         nRun();
      }
   }
   else{
      cfig.aTrail.key = id;
      nRun();
   }
}  

function fireDevice(cell,id){
   var menu,ind,arr;
   cfig.aTrail.device.push(id);
   aRun();
//for demo  
   loc = cfig.aTrail.location;
   menu = parent[loc].deviceDown();
   ind = $.inArray(id,menu);
   arr = addClasses(menu,"Device");
   domArr(ind,arr,2);
}

function newLab(){
   var nr,lab;
   nr = 0;
   $.each(nset,function(k,v){function newName(id,par,item){
   var obj,nr,lab,o,nn;
   obj = {};
   l = nset[cfig.node];
   lab = newLab();
   o = nset[lab] = {};
   o.Type = "Assembly";
   o.Genus = "New"
   o.Label = "New";
   o.Suffix = 1;
   o.Backtrack = [par];
   m = cfig.aTrail.manager
   o[m] = {}
   o[m].Size = "shared";
   o.shared = {}
   o.shared.Size = [0,0,0];
   return lab;
}
      lab = parseInt(k);
      if(lab >nr){
         nr = lab;
      }
   });
   nr += 1;
   return nr.toString();
}


