// =========================================================================================
// Intermediate Algorithm Scripting: Seek and Destroy
//====================================================================

function destroyer(arr) {
  // Remove all the values
  var iterator = arr.slice();
  var cleanArray = [];
  for(let i = 1; i < arguments.length; i++){
    for(let j in iterator){
      if(arguments[i] !== iterator[j]){
        cleanArray.push(iterator[j]);
      }
    }
    iterator = cleanArray.slice();
    cleanArray = [];
  }
  cleanArray = iterator;
  return cleanArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);  

//====================================================================
