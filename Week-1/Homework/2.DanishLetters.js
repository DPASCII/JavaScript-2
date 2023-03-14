//find and count danish letters

function danishLetters(string) {
  //return errrors
  if (typeof string != "string") {
    return;
  }

  const input = string.toLowerCase().split("");
  let output = { total: 0 };

  for (let i = 0; i < string.length; i++) {
    if (input[i] === "ø" || input[i] === "æ" || input[i] === "å") {
      if (output[input[i]] > 0) {
        output[input[i]] += 1;
        output.total += 1;
        continue;
      }

      output[input[i]] = 0;
      output[input[i]] += 1;
      output.total += 1;
      continue;
    }
  }

  console.log(output);

  // if (string.match("æ") !== null) {
  //   output.æ = string.match(/æ/g).length;
  //   output.total += output.æ;
  // }
  // if (string.match(/ø/g) !== null) {
  //   output.ø = string.match(/ø/g).length;
  //   output.total += output.ø;
  // }
  // if (string.match(/å/g) !== null) {
  //   output.å = string.match(/å/g).length;
  //   output.total += output.å;
  // }

  // console.log(output);
}

const danishString = "Jeg har en blå bil";
danishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
danishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
