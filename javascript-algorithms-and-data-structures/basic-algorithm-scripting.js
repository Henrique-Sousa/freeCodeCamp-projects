//Basic Algorithm Scripting: Title Case a Sentence

function titleCase(str) {
  
  return str.split(" ").map(x=>x[0].toUpperCase()+x.slice(1).toLowerCase()).join(" ");

}

titleCase("I'm a little tea pot");







//Basic Algorithm Scripting: Falsy Bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(x=>!!x);
}

bouncer([7, "ate", "", false, 9]);






//Basic Algorithm Scripting: Where do I Belong


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






//Basic Algorithm Scripting: Mutations

  function mutation(arr) {
    var contains = true;
    for(let i in arr[1]){
      contains = contains && arr[0].toLowerCase().includes(arr[1][i].toLowerCase());
    }
    return contains;
  }

  mutation(["hello", "hey"]);






//Basic Algorithm Scripting: Chunky Monkey



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