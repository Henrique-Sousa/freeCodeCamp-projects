// =========================================================================================
//Basic Algorithm Scripting: Chunky Monkey
// =========================================================================================



  function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  for(let i = 0; i < arr.length; i+=size){
      var subArr = [];
      for(let j = i; j < i+size && j<arr.length; j++){
        subArr.push(arr[j]);
      }
      newArr.push(subArr);
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);




// =========================================================================================