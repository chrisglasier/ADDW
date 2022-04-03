function newLab(){
   var nr,lab;
   nr = 0;
   $.each(nset,function(k,v){
      lab = parseInt(k);
      if(lab >nr){
         nr = lab;
      }
   });
   nr += 1;
   return nr.toString();
}

function newName(){
   let obj = {};
   let lab = newLab();
   let o = nset[lab] = {};
   o.Tools = [];
   o.Type = "Assembly";
   o.Genus = "New";
   o.Label = "New";
   o.index = 0;
   o.backtrack = [cfig.node];
   return lab;
}