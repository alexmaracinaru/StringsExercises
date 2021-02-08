const fullName = "alexanKJra maracOIUaru";
const firstLetter = fullName.substring(0,1).toUpperCase();
const firstSpace = fullName.indexOf(' ');

const firstName = fullName.substring(1, firstSpace).toLowerCase();
const lastSpace = fullName.lastIndexOf(' ');
const lastName = fullName.substring(lastSpace +2).toLowerCase();
const firstLetterLastName = fullName.substring(firstSpace +1, firstSpace +2).toUpperCase();
console.log(firstLetter)
console.log(firstName)
console.log(firstLetterLastName)
console.log(lastName)

const allTogether = firstLetter + firstName + " " + firstLetterLastName + lastName;
console.log(allTogether);








