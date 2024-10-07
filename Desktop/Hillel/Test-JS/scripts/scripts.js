//1//
const age = 26;
console.log(age);
console.log(typeof age);

const bigNumber = 1234567892345678675456453n;
console.log(bigNumber);
console.log(typeof bigNumber);

const name = "John";
console.log(name);
console.log(typeof name);

const isLogged = true;
console.log(isLogged);
console.log(typeof isLogged);

const hasPermission = false;
console.log(hasPermission);
console.log(typeof hasPermission);

const emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);

let variable;
console.log(variable);
console.log(typeof variable);

const uniqueID = Symbol('#123');
console.log(Symbol('#123'));
console.log(typeof Symbol('#123'));

const person = {
    name: 'Alice',
    age: 34
}
console.log(person);
console.log(typeof person);

const greet = function() {
    return 'Hello, world!';
};
console.log(greet);
console.log(typeof greet);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers);


//2//
const firstName = prompt(`Enter your first name`);
const lastName = prompt(`Enter your last name`);
const city = prompt(`Enter your city`);
console.log(`City: ${city}, First name: ${firstName}, Last name: ${lastName}`);

//3//
const number = prompt("Enter a 5-digit number:");
const digits = number.split('').join(' ');
console.log(digits);


