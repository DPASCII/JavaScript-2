let numbers = [1, 2, 3, 4];
let newNumbers = numbers
  .filter((num) => {
    if (num % 2 !== 0) {
      return num;
    }
  })
  .map((num) => num * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]
