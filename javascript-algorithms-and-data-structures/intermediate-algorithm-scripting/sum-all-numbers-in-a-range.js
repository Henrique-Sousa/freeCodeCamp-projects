// =========================================================================================
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
