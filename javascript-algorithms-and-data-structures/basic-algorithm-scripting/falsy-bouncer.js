// =========================================================================================
//Basic Algorithm Scripting: Falsy Bouncer
// =========================================================================================


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(x=>!!x);
}

bouncer([7, "ate", "", false, 9]);





// =========================================================================================