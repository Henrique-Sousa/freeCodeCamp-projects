// =========================================================================================
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
