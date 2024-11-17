// function sayHi(firstName, lastName) {
//   let x = 3;
//   function getFullName() {
//     return firstName + " " + lastName;
//   }
//   console.log("Hello, " + getFullName() + x);
// }
// // console.log(x);
// sayHi("John", "Johnson"); // Hello, John Johnson;

// let sayHi = function () {
//   alert("Привіт!");
// };
// sayHi();
//sayHi();
//alert(sayHi);
// let func = sayHi;
// sayHi = null;
// //sayHi();
// func();

// (function (name) {
//   alert("Hello, " + name);
// })("John");

let as = [4, 8, 21, 3];
function comp(a, b) {
    return a < b ? -1 : (a == b ? 0 : 1); 
}
as.sort(comp); 
console.log(as);