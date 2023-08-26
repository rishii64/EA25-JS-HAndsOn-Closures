// function counter() {
//     var counter = 0;
//     function IncreaseCounter() {
//         return counter += 1;
//     };
//     return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// for(var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
// }

// (function outerFunction(length) {
//     (function innerFunction(breadth) {
//     let area = length * breadth;
//       console.log("Area of rectangle is", area);
//     })(5)
// })(10)

//   function outerFunction() {
//     // This is the outer variable.
//     let counter = 0;
//     // This is the inner function. It increases the counter by 1 every time it is called.
//     function innerFunction() {
//       counter++;
//     }
//     // This is the return value of the outer function. It is the reference to the inner function.
//     return innerFunction;
//   }
//   // Driver code
//   let incrementCounter = outerFunction();
//   // Call the inner function 3 times.
//   incrementCounter();
//   incrementCounter();
//   incrementCounter();
//   console.log("Counter is", counter);

// var a = 12;
// (function () {
//   alert(a);
// })();

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();

// var globalVar = "xyz";
// (function outerFunc(outerArg) {
//     var outerVar = 'a';
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
//     })(456);
// })(123);
//-----------------------------------------------------