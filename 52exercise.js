const arr1 = ["a", "b", "c", "c", "x"];
const arr2 = ["z", "y", "x"];

// o(a*b)
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// o(a+b)
function containsCommonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true;
    }
  }
  return false;
}

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

// console.log(containsCommonItem(arr1, arr2));
// console.log(containsCommonItem2(arr1, arr2));
console.log(containsCommonItem3(arr1, arr2));
