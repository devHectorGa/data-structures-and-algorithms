// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
// [0, 3, 4, 4, 6, 30, 31]

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

// // EXERCISE
// function mergeSortedArrays(arr1, arr2) {
//   if (typeof arr1 !== "object" || typeof arr2 !== "object") {
//     return "One of the elements isn't an array";
//   }

//   const newArray = arr1.concat(arr2);

//   for (i = 0; i < newArray.length; i++) {
//     if (newArray[i] > newArray[i + 1]) {
//       let temporal = newArray[i];
//       newArray[i] = newArray[i + 1];
//       newArray[i + 1] = temporal;
//     }
//   }
//   return newArray;
// }

// // SOLUTION

function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  const mergeArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return mergeArray;
}

console.log(mergeSortedArrays(arr1, arr2));
