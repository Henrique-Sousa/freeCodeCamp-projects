//=================================================
//Intermediate Algorithm Scripting: DNA Pairing
//=================================================

function pairElement(str) {
  var pair_dict = {A:"T",T:"A", C:"G", G:"C"};
  var arr = [];
  for(let c of str){
    arr.push([c,pair_dict[c]])    
  }
  return arr;
}

pairElement("GCG");

