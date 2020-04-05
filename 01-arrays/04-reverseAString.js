// EXERCISE
// function reverse(str) {
//   let newStr = "";
//   index = 0;
//   for (i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + str[i];
//   }
//   return newStr;
// }
// const hello = "Hello World";
// console.log(reverse(hello));

// SOLUTION
function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

function reverse2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

const reverse3 = str => [...str].reverse().join("");

console.log(reverse("Hi My name is Hector"));
console.log(reverse2("Hi My name is Hector"));
console.log(reverse3("Hi My name is Hector"));
