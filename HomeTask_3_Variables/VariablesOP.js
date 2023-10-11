let evgeniySurname = "19";
let evgeniyAge = 31;
let evgeniyQaLead = true;

const sumSB = evgeniySurname + evgeniyQaLead;
const sumSN = evgeniySurname + evgeniyAge;
const sumNB = evgeniyAge + evgeniyQaLead;
console.log(sumSB);
console.log(sumSN);
console.log(sumNB);

const multSB = evgeniySurname * evgeniyQaLead;
const multSN = evgeniySurname * evgeniyAge;
const multNB = evgeniyAge * evgeniyQaLead;
console.log(multSB);
console.log(multSN);
console.log(multNB);

const divSB = evgeniySurname / evgeniyQaLead;
const divSN = evgeniySurname / evgeniyAge;
const divNB = evgeniyAge / evgeniyQaLead;
console.log(divSB);
console.log(divSN);
console.log(divNB);

const stringToNumber = Number(evgeniySurname);
const booleanToString = String(evgeniyQaLead);
const numberToBoolean = Boolean(evgeniyAge);
console.log(stringToNumber);
console.log(booleanToString);
console.log(numberToBoolean);