// =========================================================================================
// =========================================================================================

// Object Oriented Programming: Create a Method on an Object

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: ()=>`This dog has ${dog.numLegs} legs.`
};

dog.sayLegs();

function Dog(name) {
  this.name = name;
  Dog.prototype.numLegs = 4;
}





// =========================================================================================
// =========================================================================================

// Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code

// Add your code above this line
let beagle = new Dog("Snoopy");

function Dog(name) {
  this.name = name;
}






// =========================================================================================
// =========================================================================================

//Object Oriented Programming: Understand the Constructor Property

// Add your code below this line
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}


// =========================================================================================
// =========================================================================================