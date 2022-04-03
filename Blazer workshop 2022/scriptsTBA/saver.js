function save(word){
  let arr,narr,data;
  switch(word){
    case "interaction":
      arr = [];
      $.each(top.interaction,function(k,v){
        arr.push(k);
      });
      data = stringifier(arr,top.interaction);
      lert(data,null,1);
    break;
    case "rset":
      arr = [];
      $.each(rset,function(k,v){
        arr.push(k);
      });
      data = stringifier(arr,top.rset);
      lert(data,null,1);
    break;
    case "nset":
      arr = [];
      narr = [];
      $.each(nset,function(k,v){
        if(isNaN(k)=== true){
          arr.push(k);
        }
        else{
          narr.push(k);
        }
      });
      let carr = $.merge(arr,narr);
      data = stringifier(carr,top.nset);
      lert(data,null,1)
      console.log(nset["65"])
    break;
    case "cfig":
     /* arr = [];
      $.each(top.nset.cfig,function(k,v){
        arr.push(k);
      });
      data = stringifier(arr,top.nset.cfig);
      lert(data)  //allows multiple */
      lert(cfig,1,1)
    break;
    case "bfig":
      /*arr = [];
      $.each(top.nset.bfig,function(k,v){
        arr.push(k);
      });
      data = stringifier(arr,top.nset.bfig);
      lert(data,null,1);*/
      lert(bfig,1)
    break;
    
    default:
    //blind links removed
    set = nsetter();
    //set display rerun to restore
    data = run(set,1,1);
  }
   
}      

function nsetter(){
   var set,ret,tset;
   set = $.extend(true,{},top.nset); 
   ret = nset2Array(set);
   tset = ret[1];//lert(ret[0],1)
   set = stringifier(ret[0],tset);
   return set;
}

function nset2Array(set) {
   //creates new set array //ordered by links
   var array,ind,i,v;
   array = ["Couplers"];
   ind = 0;
   aCompile();
   function aCompile(){
     var list,i,v;
      list = set[array[ind]].link;
      $.each(list,function(i,v){
         if(!set[v]){
            list.splice(i,1);
   //non-syntax error can only be to add link in LINK without child
            lert(v +" link removed; use link device")
         }
         else{
            array.splice(ind +i +1,0,v);
         }
      })
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
   $.each(set,function(k,v){
      if(v.hasOwnProperty("Genus")){
         //adds dev json without backtracks
         if(v.Genus === "Dev"){
            array.push(k);
         }
      }
   });
   return([array,set])
}  

function setArray(){

}

function stringifier(arr,set){
  var sset,nLab,i,v,json;
   sset = [];
   $.each(arr,function(i,v){
      nLab = '"' +v +'": ';
      json = JSON.stringify(set[v],function(k,v){
      if($.isArray(v)){
         return JSON.stringify(v);
      }
      else{
         return v;
      }
   },2);
   sset.push(nLab +json);
   });
   sset = "{\n" +sset.join(",\n") +"\n}";
   sset = sset.split('}"').join("}");
   sset = sset.split('"[').join("[");
   sset = sset.split(']"').join("]");
   sset = sset.split('\\"').join('"');
   return sset;
}

function run(set,switcher,single){
   var html,k,v,i,val,str;
   if(single){
   //clear all previous 
      html = "";
   }
   else{
      html += "\n";
   }
   if(switcher){
      try{     
         html += set;
      }
      catch(e){
         arr = [];
         for(n in set){
            arr.push(n +":" +set[n]); 
         }
         html += arr.join("<br>");
      }
   }
   else{
      html += set +"\n";
   }
   return html;
}