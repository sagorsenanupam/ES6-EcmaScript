const person = {
  name: "Hena",
  age: 10,
  friends: ["sakib", "ferdous", "bappa"],
  status: "Not Found",
  country: "Bangladesh",
};
// Notun kore property add korte parbo na baire theke object.seal() use korle

// Object.seal(person);
// Object.freeze(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// for (let key of Object.keys(person)) {
//   console.log(`Key hocche: ${key},
// Value hocche: ${person[key]}`);
// }

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
