let numbers = [0, 1, 2, 3, 4];
let newNumbers = numbers.filter((num) => num % 2 !== 0).map((num) => num * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]