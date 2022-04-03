function manAspects(cell,id,cl){
   pid = cell.parent().attr("id");
   if(pid === "box") return;
   $("#box").hide();
   $("#but").css("color","initial");
   cell.css("color","blue");
   try{
      eval("fire" +cl)(cell,id);
   }
   catch(e){
      if(cl === "Tag"){
         cfig.aTrail.key = id;
         nRun();
      }
   }
}

function addClasses(list,cl){
   var arr;
   arr = [];
   $.each(list,function(i,v){
      arr.push([v,cl]);
   });
   return arr;
}

function aspects(node){
   var arr,i,ind,narr,nn,k,v;
   arr = [];
   i = 0; ind = -1;
   narr = $.extend(true, {}, nset[node]);
   if(narr.Type === "Crosslink"){
      //narr.Genus = nset[nn.Genus].Label;
   }
//if set has no links it still needs a link manager
   else{
      if(!narr.link){
         larr = [];
         ind = 0;
         $.each(narr,function(k,v){
            larr.push([k,v])
            if(k === "Backtrack"){
               ins = ind;
            }
            ind +=1;
         });
         larr.splice(ins+1,0,["link",[]]);
         narr = {};
         $.each(larr,function(i,v){
            narr[v[0]] = v[1];
         });
      }
   }
//run out (enhanced) array
   arr = [];
   $.each(narr,function(k,v){
      if(typeof v === "object"){
         switch(k){
            case "link": cl = "link"; break;
            case "Backtrack":cl = "link"; break;
            case "Logistic": cl = "link"; break;
            case "Monitor": cl = "Monitor"; break;
            default: cl = "Manager";
         }
         arr.push([k,v,cl]);
         if(cfig.aTrail.manager === k){
         /* if(nset[cfig.node].Type === "Product"){
               v = nset[node].product;
            }
         */
            $.each(v,function(k,v){
               v = v === "shared"? nset[node].shared[k] : v;
               arr.push([k,v,"Key"]);
            });
         }  
      }
      else {
         arr.push([k,v,"Tag"]);
      }
   });
//skip lowercase assemblerKeys
   farr = []; i = 0; ind = -1;
   $.each(arr,function(i,v){
      if(v[0].charCodeAt(0) <90){
         farr.push([[v[0],v[1]],v[2]]); 
         if(v[0] === cfig.aTrail.key){
            ind = farr.length -1;
         }
      }
   });
   return [ind,farr];
}

function options(node,key){
   var type,cont,arr;
   type = nset[node].Type;
   cont = nset[node].Genus;
   arr = rset.assemblerKeys[key];
   if(!arr){
      or = rset.extensions[key];
      if(or){
         if(!arr){
            arr = or[type];
         }
         if(!arr){
            arr = or[cont];
         }
      }
   }
   if(!arr){
      arr = rset.extensions[cfig.aTrail.key];
   }
   if(!arr){
      arr = [nset[node][key]];
   }
   ret = addClasses(arr,"Option");
   return [arr,ret];
}

function BacktrackArr(node){
   var arr;
   arr = [];
   ret = (nset[node].Backtrack,"Device")
   return ret;
}

function linkArr(){
   var k,l,t,p,arr,karr,ind;
   k = rset.assemblerKeys;
   n = nset[cfig.node]
   t = n.Type;
   arr = k.action[t]? k.action[t] : k.action.default;
   ret = addClasses(arr,"Link1");
   return [arr,ret];
}

function linkOptions(id,sn){
   var arr,ind;
   arr = linkArr();
   $.each(arr,function(i,v){
      if(v === cfig.aTrail.fun){
         ind = i;
      }
   });
   ret = addClasses(arr,"Link2")
   domArr("l",ind,arr,sn);
}

function crosslinkContexts(id,sn){
   var arr,ind;
   
   arr = [];
   $.each(rset.extensions.Label,function(k,v){
      arr.push(k);
   });
   ind = $.inArray(id,arr);
   domArr("a",ind,arr,sn);
}

function keyOptions(id,ind){
   var assemblerKeys,arr,ind;
   arr = rset.extensions.Genus[cont];
   if(!arr){
      arr = [nset[cfig.node][id]];
   }
   domArr("w",ind,arr,2);
}

