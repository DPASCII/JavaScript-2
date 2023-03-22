const names = [
  "Carlo",
  "Darvey",
  "Jovey",
  "David",
  "Micmic",
  "Clarisse",
  "Cars",
];

// names.forEach((name) => {
//   console.log(name);
// });

// const formalNames = names.map((name) => `Master ${name}`);

// console.log(formalNames);

// const guyNames = names
//   .filter((name) => {
//     const girls = ["Micmic", "Clarisse", "Cars"];
//     if (girls.indexOf(name) > -1) {
//       return false;
//     }
//     return true;
//   })
//   .map((name) => `Bobo ${name}`);

// console.log(guyNames);

const initialString = "";
const reducedNames = names.reduce((acc, cur) => {
  console.log(acc);
  console.log(cur);
  return acc + ", " + cur;
});
