// =========================================================================================
// Functional Programming: Sort an Array Alphabetically using the sort Method
// =========================================================================================


function alphabeticalOrder(arr) {
  // Add your code below this line
  var newArr = arr.slice();
  return newArr.sort((a,b)=>(a>b));
  
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


// =========================================================================================
