function reverse(str) {
  let newStr = "";
  index = 0;
  for (i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}
const hello = "Hello World";
console.log(reverse(hello));
