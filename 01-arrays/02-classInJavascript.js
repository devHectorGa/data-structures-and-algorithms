// REFERENCE TYPE

// console.log([] === []); false
// console.log([1] === [1]); false
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
// console.log(object1 === object2); // true
// console.log(object1 === object3); // false
object1.value = 15;
object2.value = 15;
// console.log(object1 === object2); // true

// CONTEXT VS SCOPE

// function a() {
//   console.log(this);
// }
// a();
//  The console was called inside a function, but "this" watches in the global context. For example, in one browser the global context is the object called window and in node.js the global context is an empty object.

const object4 = {
  a: function() {
    console.log(this);
  }
};
// The console was instanced inside a object, when it was called the "this" element was instanced inside of the object

object4.a();
// The console was called inside a function and this function was inside of the object 4. In this case "this" watches the object 4 how the context

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi! I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Yeah! I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
