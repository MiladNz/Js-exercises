const input = 6;
const result = new Array(input).fill(null).map((curr, index) => index + 1).reduce((acc, curr) => acc * curr);
console.log(result);
