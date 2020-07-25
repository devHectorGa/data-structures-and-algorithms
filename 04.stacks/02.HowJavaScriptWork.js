/*  CALL STACK - SINGLE LINE  */
console.log('1');
console.log('2');
console.log('3');
// It's called step by step in the Language

const one = () => {
  const two = () => {
    console.log('4');
  };
  two();
};

/* CALL STACK
  console.log()
  two()
  one()
*/

// Recursion
function foo() {
  foo();
}
foo();
// Loopin over and over the same function. STACK OVERFLOW

console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');

/* CALL STACK
  console.log('1')
  setTimeout() -> callback()     <- Return a callback()
  callback() to CALLBACK QUEUE
  console.log('3')
  EVENT LOOP -> callback()       <- The event in this case is the time
  callback() to CALL STACK
  callback() -> console.log('2')
  console.log('2')               <- the callback() is execute

  EXPECTED OUTPUT
  1
  3
  2
*/

/* JavaScript Run-Time Enviroment:
  1. WEB APIs
    1.1. DOM (document)
    1.2. Ajax (XMLHttpRequest)
    1.3. Timeout (setTimeout)
  2. Callback Queue
  3. Event Loop
  4. Memory Heap
  5. Call Stack
*/
