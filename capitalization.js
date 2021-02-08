const fullName = "alexandra maracinaru";
const uppedOne = fullName.substring(0,1).toUpperCase();
const firstSpace = fullName.indexOf(' ');

const firstName = fullName.substring(1, firstSpace);
const lastSpace = fullName.lastIndexOf(' ');
const lastName = fullName.substring(lastSpace +2);
const uppedTwo = fullName.substring(firstSpace +1, firstSpace +2).toUpperCase();
//console.log(uppedOne)
//console.log(firstName)
//console.log(uppedTwo)
//console.log(lastName)

const allTogether = uppedOne + firstName + " " + uppedTwo + lastName;
console.log(allTogether);








