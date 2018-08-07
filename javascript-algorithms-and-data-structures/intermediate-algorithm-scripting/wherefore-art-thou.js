//=======================================================================================================================================
// Intermediate Algorithm Scripting: Wherefore art thou
//=======================================================================================================================================

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  for(let i in collection){
    var iHasAll = true;
    for(let key in source){
      iHasAll = iHasAll && collection[i][key] === source[key];
    }
    if (iHasAll){
      arr.push(collection[i]);
    }
  } 

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//=======================================================================================================================================
