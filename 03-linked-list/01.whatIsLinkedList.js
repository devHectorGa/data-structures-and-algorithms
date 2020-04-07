// const basket = ["apples", "grapes", "pears"];

// linked list: apples --> grapes --> pears

// apples
// 8947  --> grapes
//           8742  --> pears
//                     372   --> null

// let obj1 = { a: true };
// let obj2 = obj1;

// obj1.a = "Yea";
// delete obj1;
// obj2 = "Hello";

// console.log(obj1);
// console.log(obj2);

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // Code here
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);

console.log(myLinkedList);
