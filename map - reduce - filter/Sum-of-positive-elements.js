const input = [ 1, -4, 12, 0, -3, 29, -150];
// const filteredPositive = input.filter((n) => n > 0);
// const result = filteredPositive.reduce((acc,curr) => acc+curr , 0);
// Or briefly:
const result = input.filter((n) => n > 0).reduce((acc,curr) => acc+curr , 0);
console.log(result);
