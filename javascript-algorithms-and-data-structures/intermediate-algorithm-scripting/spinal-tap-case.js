// =========================================================================================
// Intermediate Algorithm Scripting: Spinal Tap Case
//======================================================================================================================

function spinalCase(str) {
  var newStr = "";
  for(let i =0; i < str.length; i++){
    if(/[a-z]/.test(str[i])){
      newStr += str[i];
    }
    if(/[A-Z]/.test(str[i])){
      if(i==0 || / |-|_/.test(str[i-1])){
        newStr += str[i];
      } else {
        newStr += `-${str[i]}`;
      }
    }
    if(/ |-|_/.test(str[i])){
        newStr += "-";
    }
  }
  return newStr.toLowerCase();
}

spinalCase('This Is Spinal Tap');


//======================================================================================================================
