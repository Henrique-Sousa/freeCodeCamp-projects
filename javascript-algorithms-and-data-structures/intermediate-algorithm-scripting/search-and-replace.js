// =========================================================================================
// Intermediate Algorithm Scripting: Search and Replace
//======================================================================================================================

function myReplace(str, before, after) {
  const arr = str.split(" ");
  for(let i in arr){
    if(arr[i] === before){
      if(/[A-Z]/.test(before[0])){
        const newWord = after[0].toUpperCase() + after.slice(1);
        arr[i] = newWord; 
      } else {
        arr[i] = after;
      }
    }
  }
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//======================================================================================================================
