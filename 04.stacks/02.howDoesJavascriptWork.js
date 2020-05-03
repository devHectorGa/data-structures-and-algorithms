// How Javascript Works?

// asynchronous vs synchronous
// Javascript is a single threaded language that can be non-blocking?

// What is a program?
// - Allocate memory
// - Parse and execute

// The Javascript const for two part:
// - Memory Heap
// - Call Stack

const a = 1; // <- Allocate memory
const b = 10;
const c = 100;

// Call Stack
// console.log("1");
// console.log("2");
// console.log("3");

// const one = () => {
//   const two = () => {
//     console.log("4");
//   };
//   two();
// };

// one(); // <- Call Stack

// Synchronous is a execute line for line all the code, and wait for the

// Recursion - Generation overflow
// function foo() {
//   foo(); // looping over
// }
// foo();

// Synchronous
console.log("1");
setTimeout(() => {
  // <- Show in the last.
  // setTimeout is part of the Web APIs
  console.log("2");
}, 2000);
console.log("3");

// The Web APIs has this parts:
// 1. DOM (document)
// 2. AJAX (XMLHttpRequest)
// 3. Timeout (setTimeout)
