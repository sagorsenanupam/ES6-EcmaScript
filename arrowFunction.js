// function add(a, b) {
//   return a + b;
// }
// add(5, 10);

// const add = (a, b) => a + b;
// console.log(add(5, 10));
// For one line

// Now for Multiple lines
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(5, 10));

// Normal arrow function e console.log(arguments) dile koyta arguments eta dibe na
// normal function e same call korle je koyta arguments ota object akare pass korbe.

// Anonymous function
// document.getElementById("title").addEventListener("click", () => {});
// document.getElementById("title").addEventListener("click", function () {});

// const test = () => console.log("Hello");

// const square = (x) => x * x;
// console.log(square(10));

document.getElementById("title").addEventListener("click", () => {
  console.log("clicked");
});
document.getElementById("title").addEventListener("click", function () {
  console.log("clicked");
});
