// // Here we create a funtion that as a parameter takes a function!! Super weird right!?
// // Functions works just like any other type in js.
// function functionRunner(functionToRun) {
//   console.log(1);
//   console.log(typeof functionToRun);
//   console.log(2);
//   // Here we are calling the function that is provided as an argument when calling functionRunner
//   console.log(functionToRun());
//   console.log(3);
// }

// functionRunner(function () {
//   console.log("A");
//   console.log("hello");
//   console.log("B");
//   return "tite";
// });

// // We dont see anything, why??
// functionRunner(Math.random);

// // Lets rewrite functionRunner to log out the return of a function
// function functionRunnerImproved(functionToRun) {
//   console.log(11);
//   console.log(typeof functionToRun);
//   console.log(12);
//   // Here we are calling the function that is provided as an argument when calling functionRunner
//   const capturedReturnValue = functionToRun();
//   console.log(13);
//   console.log(capturedReturnValue);
//   console.log(14);
// }

// functionRunnerImproved(Math.random);

// setTimeout(function () {
//   console.log("2 seconds has elapsed!");
// }, 2000);

// // Cool, now lets make a function as a variable:
// const fourSecondLog = function () {
//   console.log("4 seconds has elapsed!");
// };

// setTimeout(fourSecondLog, 4000);

// console.log(123);
// console.log(123);
// console.log(123);
// console.log(123);
// console.log(123);

myFunction();
// Named function
function myFunction() {
  console.log("myFunction");
}

// Anonymous function, assigned to a variable
const myFunctionAsVar = function () {
  console.log("myFunctionAsVar");
};

myFunctionAsVar();
