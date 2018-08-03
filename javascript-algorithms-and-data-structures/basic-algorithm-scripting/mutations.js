// =========================================================================================
//Basic Algorithm Scripting: Mutations
// =========================================================================================


  function mutation(arr) {
    var contains = true;
    for(let i in arr[1]){
      contains = contains && arr[0].toLowerCase().includes(arr[1][i].toLowerCase());
    }
    return contains;
  }

  mutation(["hello", "hey"]);





// =========================================================================================
