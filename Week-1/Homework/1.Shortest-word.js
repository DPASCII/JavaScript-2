//find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestWord(array) {
  if (typeof array != "object") {
    return;
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

shortestWord(danishWords); // returns 'ø'
