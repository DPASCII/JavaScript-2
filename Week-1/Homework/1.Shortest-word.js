//find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const tanga = ["bill", { tanga: 1 }];
function shortestWord(array) {
  if (Array.isArray(array) === false) {
    console.log("tanga!");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "string") {
      console.log("tanga!");
      return;
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

  console.log(array[indexOfShortest]);
}

shortestWord(tanga); // returns 'ø'
