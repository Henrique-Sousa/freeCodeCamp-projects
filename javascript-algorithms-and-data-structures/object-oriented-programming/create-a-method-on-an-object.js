// =========================================================================================
// Object Oriented Programming: Create a Method on an Object
// =========================================================================================


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
