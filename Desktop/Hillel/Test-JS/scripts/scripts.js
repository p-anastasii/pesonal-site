//1-Lesson3//
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


//2-Lesson3//
const firstName = prompt(`Enter your first name`);
const lastName = prompt(`Enter your last name`);
const city = prompt(`Enter your city`);
console.log(`City: ${city}, First name: ${firstName}, Last name: ${lastName}`);

//3-Lesson3//
const number = prompt("Enter a 5-digit number:");
const digits = number.split('').join(' ');
console.log(digits);

//1-Lesson4//
const userName = prompt('Enter your name:');
alert(`Hello, ${userName}! How are you?`);

//2-Lesson 4//
const threeNumbers = prompt('Enter three-digit number:');
const splitDigits = threeNumbers.split('');
const firstDigit = splitDigits[0];
const secondDigit = splitDigits[1];
const thirdDigit = splitDigits[2];
if (firstDigit === secondDigit && secondDigit === thirdDigit){
    console.log('All digits are the same.');
} else{
    console.log('Not all digits are the same.');
}
if (firstDigit === secondDigit || secondDigit === thirdDigit || firstDigit === thirdDigit){
    console.log('There are some same digits.');
} else{
    console.log('There are not any same digits.');
}

//3-Lesson 4//
const yearBirth = prompt('Enter your year of birth:');
if (yearBirth === null){
    alert("It's a pity that you didn't want to share your year of birth.");
    throw new Error('User canceled entering year of birth.');
}
const cityResidence = prompt('Enter your city of residence:');
if (cityResidence === null){
    alert("It's a pity that you didn't want to share your city of residence.");
    throw new Error('User canceled entering city of residence.');
}
const favoriteSport = prompt('Enter your favorite sport:');
if (favoriteSport === null){
    alert("It's a pity that you didn't want to share your favorite sport.");
    throw new Error('User canceled entering a favorite sport.');
}
const userAge = 2024 - yearBirth;

let messageCity;
if(cityResidence === 'Kyiv'){
    messageCity = 'You live in the capital of Ukraine';
} else if(cityResidence === 'Washington'){
    messageCity = 'You live in the capital of USA';
} else if (cityResidence === 'London'){
    messageCity = 'You live in the capital of UK';
} else{
    messageCity = `You live in ${cityResidence}`;
}

let messageSport;
if(favoriteSport === 'Football'){
    messageSport = 'Cool! Do you want to become like Cristiano Ronaldo?';
} else if (favoriteSport === 'Basketball'){
    messageSport = 'Cool! Do you want to become like Michael Jordan?';
} else if (favoriteSport === 'Hockey'){
    messageSport = 'Cool! Do you want to become like Wayne Gretzky?';
} else{
    messageSport = `Your favorite sport is ${favoriteSport}`;
}

alert(`Your age is ${userAge}. ${messageCity}. ${messageSport}`);

//4-Lesson 4//
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true){
    case(numOrStr === null):
        console.log('ви скасували');
        break;
    case(numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case(isNaN(+numOrStr)):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}
