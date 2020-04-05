const strings = ["a", "b", "c", "d"];

// push
strings.push("e"); //o(1)
// adding element in the end of the list

// pop
strings.pop(); // o(1)
// Remove the last item of the list

// unshift
strings.unshift("x");
// Adding elements at the beginning of the array

// splice
strings.splice(2, 0, "alien"); // o(n)
// You can add one element or many elements in some position of the array, this method can replace one or various elements in the array and delete elements.
// array.splice(_position, _elementsQuantityForDelete, _elementsForInclude)

console.log(strings);

// c++
// int a[20]
// int b[5] {1, 2, 3, 4, 5}
// Static list in this language, in this case if I need increase the elements of the array, I need copy the element in one new array
