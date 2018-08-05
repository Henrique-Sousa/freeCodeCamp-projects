//====================================================================
// Intermediate Algorithm Scripting: Sum All Numbers in a Range
//====================================================================
function sumAll(arr) {
  if(arr[0]>arr[1]){
    var max = arr[0];
    var min = arr[1];
  } else if(arr[1]>arr[0]){
    var max = arr[1];
    var min = arr[0];
  } else {
    return arr[0];
  }

  var sum = 0;
  for(let i = min; i <= max; i++ ){
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);

//====================================================================
// Intermediate Algorithm Scripting: Diff Two Arrays
//====================================================================

function diffArray(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  var newArr = [];

  for(let i in arr1){
    var iIsInArr2 = false;
    for(let j in arr2){
      if(arr1[i] === arr2[j]){
        iIsInArr2 = true;
      }
    }
    if(! iIsInArr2){
      newArr.push(arr1[i])
    }
  }

  for(let i in arr2){
    var iIsInArr1 = false
;    for(let j in arr1){
      if(arr2[i] === arr1[j]){
        iIsInArr1 = true;
      }
    }
    if(! iIsInArr1){
      newArr.push(arr2[i])
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//====================================================================
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
//
//====================================================================