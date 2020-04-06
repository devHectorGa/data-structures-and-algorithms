let user = {
  age: 54,
  name: "Wylie",
  magic: true,
  scream: function() {
    console.log("Ahh");
  }
};

console.log(user);
console.log(user.age); // O(1)

user.spell = "Abra Kadabra"; // O(1)

console.log(user);
console.log(user.scream());

// O(n/k)

const a = new Map();
const b = new Set();

console.log(a);
console.log(b);
