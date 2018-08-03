// =========================================================================================
//Basic Algorithm Scripting: Where do I Belong
// =========================================================================================



function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  for(let i in arr.sort((a,b)=>(a-b))){
    if(num <= arr[i]){
      return parseInt(i);
    }
  }
  return parseInt(arr.length);
}

getIndexToIns([40, 60], 50);






// =========================================================================================
