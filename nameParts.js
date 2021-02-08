const fullName = "Peter Heronimous Lind";
const lastSpace = fullName.lastIndexOf(' ');
const firstSpace = fullName.indexOf(' ');

const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(fullName.indexOf(' ') +1, lastSpace);
const lastName = fullName.substring(lastSpace + 1);

console.log(`This is ${firstName}'s first name`);

console.log(`This: that is ${middleName}, is ${firstName}'s middle name`);
console.log(`And this one: ${lastName}, is his last name`);

const myName = "Alexandra D Maracinaru";
const theLastSpace = myName.lastIndexOf(' ');
const theFirstSpace = myName.indexOf(' ');

const myFirstName = myName.substring(0, theFirstSpace);
const myMidName = myName.substring(myName.indexOf(' ') +1, theLastSpace);
const myLastName = myName.substring(theLastSpace + 1);
console.log(`First name: ${myFirstName}`);
console.log(`My father's initial: ${myMidName}, since I don't have a middle name`);
console.log(`Last name: ${myLastName}`);

const longName = "Albus Percival Wulfric Brian Dumbledore";
const lastSpaceLong = longName.lastIndexOf(' ');
const firstSpaceLong = longName.indexOf(' ');

const mid = longName.substring(firstSpaceLong + 1, lastSpaceLong);
console.log(mid);










