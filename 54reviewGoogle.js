// Native
function hasPairWithSum(arr, sum) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

// console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));
console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
