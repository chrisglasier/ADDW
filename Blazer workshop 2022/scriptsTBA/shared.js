
//for analysing/modelling assemblies
function pairAssembler(node) {
   var set,pairs,ind,i,v,pair,par;
   set = $.extend(true,{},nset);
   pairs = [[node,"scene"]];
   ind = 0;
   aCompile();
   function aCompile(){ 
      pair = pairs[ind];
      par = pair[0];
      if(set[par].link){
         $.each(set[par].link,function(i,v){
            pairs.push([v,par]);
         });
      }
      aPass();
      function aPass(){
         ind += 1; 
         pair = pairs[ind];
         if(!pair){
            return;
         }
         if(set[pair[0]].link){
            aCompile(); 
         }  
         else{
            aPass();
         }
      }     
   }
   return pairs;
}

//called from monitor (passing id extracted from event)  
function rerun(node,model){
   var nt,node;
   nset.cfig.node = node;
   nt = [node]; 
   while(nset[node].Backtrack){
      node = nset[node].Backtrack[0];
      nt.unshift(node);
   }
   nset.cfig.cutTrail = nt;
   nset.cfig.trail = nt; 
   nRun(); //trail stays same as represents all display
   if(!model){
     //tRun();
     //tide();
   }
}

function macStringify(set,offset){
   var num,str,pre,k,v,arr,sset,i,vv,offset,json,mod;
//if set is already array
   if(set.constructor === Array){
      return set;
   }
//turn set object into array of objects
   num = []; str = [];
   $.each(set,function(k,v){
      if(isNaN(parseInt(k))){
         str.push(k);
      }
      else{
         num.push(parseInt(k));
      }
   });
   str.sort();
   num.sort(function(a,b){return a-b});
   arr = str.concat(num);
   sset = {};
   $.each(arr,function(i,v){
      sset[v] = set[v];
   });
//remove offset option?
   offset = offset? offset : "\t";
//stringifies all normally except arrays made on one line
   json = JSON.stringify(sset,function(k,v){
     console.log(v.constructor)
     console.log(v instanceof Array)
      if(v instanceof Array){
//this stringifies objects in arrays
         mod = [];
   //this should be while statement
         $.each(v,function(i,v){
            if(v instanceof Object){
               mod.push(JSON.stringify(v));
            }
         });
         if(mod.length >0){
            return mod;
         }
         else{
            return JSON.stringify(v);
         }
      }
      else{
         return v;
      }
   },offset);
//makes stringed arrays into valid arrays (removes external quotes)
   json = json.split('"{').join("{");
   json = json.split('}"').join("}");
   json = json.split('"[').join("[");
   json = json.split(']"').join("]");
   json = json.split('\\"').join('"');
   return json;                     
}

//NOT USED YET
function printNset(ret) {
   var set,array,ind,i,v;
   set = $.extend(true,{},nset);
   array = ["Couplers"];
   ind = 0;
   aCompile();
   function aCompile(){ 
      $.each(set[array[ind]].link,function(i,v){
         array.splice(ind +i +1,0,v);
      });
      aPass();
      function aPass(){
         ind += 1; 
         if(!array[ind]){
            return;
         }
         if(set[array[ind]].link){
            aCompile(); 
         }  
         else{
            aPass();
         }
      }
   }
   if(ret){
      if(ret === "nset"){
         nset.bfig = bfig;
         nset.cfig = cfig;
         array.push("bfig");
         array.push("cfig");
      }
   }
   return array;
}