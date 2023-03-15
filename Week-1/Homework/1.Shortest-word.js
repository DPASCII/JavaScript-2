//find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const tanga = [];
function shortestWord(array) {
  if (Array.isArray(array) === false) {
    return "tanga!";
  }

  if (array.length === 0) {
    return "tanga!";
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "string") {
      return "tanga!";
    }
  }

  let indexOfShortest = 0;
  let shortest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
      indexOfShortest = i;
    }
  }

  return array[indexOfShortest];
}

console.log(shortestWord(danishWords));
console.log(shortestWord(tanga)); // returns 'ø'
