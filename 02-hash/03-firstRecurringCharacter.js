// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// It should return 1

// Given an array = [2, 3, 4, 5]
// It should return undefined

// EXERCISE

function firstRecurringCharacter(array) {
  let keys = {};

  for (i = 0; i < array.length; i++) {
    if (keys[array[i]]) {
      return array[i];
    } else {
      keys[array[i]] = true;
    }
  }
  return undefined;
}

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];

console.log(firstRecurringCharacter(array1));
console.log(firstRecurringCharacter(array2));
console.log(firstRecurringCharacter(array3));
