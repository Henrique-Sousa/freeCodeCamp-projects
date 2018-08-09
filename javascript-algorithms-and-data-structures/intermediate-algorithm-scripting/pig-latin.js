// =========================================================================================
// Intermediate Algorithm Scripting: Pig Latin
//======================================================================================================================

function translatePigLatin(str) {
  if(/[aeiou]/.test(str[0])){
    return str + "way";
  }
  var ending = "";
  let i = 0;
  while(/\w/.test(str[i]) && ! /[0-9aeiou]/.test(str[i])){
    ending += str[i];
    i++;
  }
  return str.slice(i) + ending + "ay";
}

translatePigLatin("consonant");


//======================================================================================================================
