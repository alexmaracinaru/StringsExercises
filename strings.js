/*const name = "Peter";
const animalType = "cat";
const animalName = "Mandu";

console.log(`My name is ${name}
and I have a ${animalType} called ${animalName}`);*/

const fullName = "Albus Percival Wulfric Brian Dumbeldore";
const theLength = fullName.length;
console.log(`${fullName} is ${theLength} characters long`);
const letter = fullName[6];
console.log(`The first letter of ${fullName} is ${letter}`);




const findIndexOf = 'D';
const indexOfFirst = fullName.indexOf(findIndexOf);

console.log(`The index of "${findIndexOf}" is ${indexOfFirst}`);

const findTheLast = "e";
const indexOfLast = fullName.lastIndexOf(findTheLast);
console.log(`The last index of ${findTheLast} is ${indexOfLast}`);

// expected output: "The index of "D" is 29"

