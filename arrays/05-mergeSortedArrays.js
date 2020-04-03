// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
// [0, 3, 4, 4, 6, 30, 31]

// EXERCISE
const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

function mergeSortedArrays(arr1, arr2) {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return "One of the elements isn't an array";
  }

  const newArray = arr1.concat(arr2);

  for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > newArray[i + 1]) {
      let temporal = newArray[i];
      newArray[i] = newArray[i + 1];
      newArray[i + 1] = temporal;
    }
  }
  return newArray;
}
console.log(mergeSortedArrays(arr1, arr2));
