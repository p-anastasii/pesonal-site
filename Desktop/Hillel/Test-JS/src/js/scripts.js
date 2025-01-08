// //1-Lesson3//
// const age = 26;
// console.log(age);
// console.log(typeof age);
//
// const bigNumber = 1234567892345678675456453n;
// console.log(bigNumber);
// console.log(typeof bigNumber);
//
// const name = "John";
// console.log(name);
// console.log(typeof name);
//
// const isLogged = true;
// console.log(isLogged);
// console.log(typeof isLogged);
//
// const hasPermission = false;
// console.log(hasPermission);
// console.log(typeof hasPermission);
//
// const emptyValue = null;
// console.log(emptyValue);
// console.log(typeof emptyValue);
//
// let variable;
// console.log(variable);
// console.log(typeof variable);
//
// const uniqueID = Symbol("#123");
// console.log(Symbol("#123"));
// console.log(typeof Symbol("#123"));
//
// const person = {
//   name: "Alice",
//   age: 34,
// };
// console.log(person);
// console.log(typeof person);
//
// const greet = function () {
//   return "Hello, world!";
// };
// console.log(greet);
// console.log(typeof greet);
//
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(typeof numbers);
//
// //2-Lesson3//
// const firstName = prompt("Enter your first name");
// const lastName = prompt("Enter your last name");
// const city = prompt("Enter your city");
// console.log(`City: ${city}, First name: ${firstName}, Last name: ${lastName}`);
//
// //3-Lesson3//
// const number = prompt("Enter a 5-digit number:");
// const digits = number.split("").join(" ");
// console.log(digits);
//
// //1-Lesson4//
// const userName = prompt("Enter your name:");
// alert(`Hello, ${userName}! How are you?`);
//
// //2-Lesson 4//
// const threeNumbers = prompt("Enter three-digit number:");
// const splitDigits = threeNumbers.split("");
// const firstDigit = splitDigits[0];
// const secondDigit = splitDigits[1];
// const thirdDigit = splitDigits[2];
// if (firstDigit === secondDigit && secondDigit === thirdDigit) {
//   console.log("All digits are the same.");
// } else {
//   console.log("Not all digits are the same.");
// }
// if (
//   firstDigit === secondDigit ||
//   secondDigit === thirdDigit ||
//   firstDigit === thirdDigit
// ) {
//   console.log("There are some same digits.");
// } else {
//   console.log("There are not any same digits.");
// }
//
// //3-Lesson 4//
// const yearBirth = prompt("Enter your year of birth:");
// if (yearBirth === null) {
//   alert("It's a pity that you didn't want to share your year of birth.");
//   throw new Error("User canceled entering year of birth.");
// }
// const cityResidence = prompt("Enter your city of residence:");
// if (cityResidence === null) {
//   alert("It's a pity that you didn't want to share your city of residence.");
//   throw new Error("User canceled entering city of residence.");
// }
// const favoriteSport = prompt("Enter your favorite sport:");
// if (favoriteSport === null) {
//   alert("It's a pity that you didn't want to share your favorite sport.");
//   throw new Error("User canceled entering a favorite sport.");
// }
// const userAge = 2024 - yearBirth;
//
// let messageCity;
// if (cityResidence === "Kyiv") {
//   messageCity = "You live in the capital of Ukraine";
// } else if (cityResidence === "Washington") {
//   messageCity = "You live in the capital of USA";
// } else if (cityResidence === "London") {
//   messageCity = "You live in the capital of UK";
// } else {
//   messageCity = `You live in ${cityResidence}`;
// }
//
// let messageSport;
// if (favoriteSport === "Football") {
//   messageSport = "Cool! Do you want to become like Cristiano Ronaldo?";
// } else if (favoriteSport === "Basketball") {
//   messageSport = "Cool! Do you want to become like Michael Jordan?";
// } else if (favoriteSport === "Hockey") {
//   messageSport = "Cool! Do you want to become like Wayne Gretzky?";
// } else {
//   messageSport = `Your favorite sport is ${favoriteSport}`;
// }
//
// alert(`Your age is ${userAge}. ${messageCity}. ${messageSport}`);
//
// //4-Lesson 4//
// let numOrStr = prompt("input number or string");
// console.log(numOrStr);
//
// switch (true) {
//   case numOrStr === null:
//     console.log("ви скасували");
//     break;
//   case numOrStr.trim() === "":
//     console.log("Empty String");
//     break;
//   case isNaN(+numOrStr):
//     console.log(" number is Ba_NaN");
//     break;
//   default:
//     console.log("OK!");
// }
//
// //1-Lesson 5//
// for (let i = 20; i <= 30; i += 0.5) {
//   console.log(i);
// }
//
// //2-Lesson 5//
// const rate = 26;
// let usd = 10;
// while (usd <= 100) {
//   let uah = usd * rate;
//   console.log(`${usd} USD = ${uah} UAH`);
//   usd += 10;
// }
//
// //3-Lesson 5//
// let numberN = +prompt("Please enter a number");
// let a = 1;
// do {
//   if (a * a <= numberN) {
//     console.log(a);
//   }
//   a++;
// } while (a * a <= numberN);
//
// //4-Lesson 5//
//
// let num = +prompt("Please enter a number");
// if (num <= 1) {
//   console.log(`Number ${num} is not a prime number.`);
// } else {
//   let isPrimeNum = true;
//   for (b = 2; b < num; b++) {
//     if (num % b === 0) {
//       isPrimeNum = false;
//       break;
//     }
//   }
//   if (isPrimeNum) {
//     console.log(`Number ${num} is a prime number.`);
//   } else {
//     console.log(`Number ${num} is not a prime number.`);
//   }
// }
//
// //1-Lesson 6//
// //Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.//
//
// function removeSymbols(str, symbolsToRemove) {
//   let result = "";
//   for (let symbol of str) {
//     if (!symbolsToRemove.includes(symbol)) {
//       result += symbol;
//     }
//   }
//   return result;
// }
//
// const input = prompt("Enter string: ");
// const symbolsRemove = prompt("Enter symbols to remove: ");
//
// const result = removeSymbols(input, symbolsRemove);
// console.log(result);
//
// //2-Lesson 6//
// //Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.//
//
// const inputStr = prompt(
//   "Enter something that include letters, symbols and numbers: ",
// );
// let array = inputStr.split("");
//
// let newArray = [];
// for (let input of array) {
//   const number = Number(input);
//   if (!isNaN(number)) {
//     newArray.push(number);
//   }
// }
//
// console.log(newArray);
//
// function calcAverage(numbers) {
//   let sum = 0;
//   let count = 0;
//   for (let num of numbers) {
//     sum += num;
//     count++;
//   }
//   return sum / count;
// }
//
// console.log(calcAverage(newArray));
//
// //3-Lesson 6//
// // Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// // Наприклад:
// // const array = [1, 3, 4, 6, 2, 5, 7];
// // removeElement(array,4);
// // console.log(array); // Результат: [1, 3, 6, 2, 5, 7]//
//
// const arrayInitial = [1, 3, 4, 6, 2, 5, 7];
// function removeElement(array, elementToRemove) {
//   let arrayNew = [];
//   for (let element of array) {
//     if (element !== elementToRemove) {
//       arrayNew.push(element);
//     }
//   }
//   return arrayNew;
// }
//
// console.log(removeElement(arrayInitial, 4));
//
// //1 - Lesson 7//
// //Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// //
// // console.log(sum(4)); // 4
// //
// // console.log(sum(6)); // 10
// //
// // console.log(sum(10)); // 20
// //
// // console.log(sum(7)); // 27//
//
// function sumNumbers() {
//   let result = 0;
//   return function (b) {
//     result += b;
//     return result;
//   };
// }
//
// const sum = sumNumbers();
// console.log(sum(4));
// console.log(sum(6));
// console.log(sum(10));
// console.log(sum(7));
//
// //2 - Lesson 7//
// //Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)//
//
// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }
//
// const result1 = multiply(5)(2);
// console.log(result1);
//
// //3 - Lesson 7//
// //Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.//
//
// function enterNumber() {
//   let numberInput;
//
//   for (let i = 0; i < 10; i++) {
//     numberInput = +prompt("Enter number over 100: ");
//
//     if (numberInput > 100) {
//       console.log(numberInput);
//       return;
//     } else {
//       alert("This number less than 100. Please, try again.");
//     }
//   }
//   console.log(
//     "Maximum number of input attempts reached. Your last entered number:",
//     numberInput,
//   );
// }
//
// // Lesson 8
// // Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
// //
// // let ladder = {
// //   up: function () { // підніматиме вас на одну сходинку
// //   },
// //   down: function () { // опускатиме вас на одну сходинку
// //   },
// //   showStep: function () { // показує поточну сходинку
// //   }
// // };
// //
// // Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
// // ladder.up().up().down().showStep(); // 1
//
// let ladder = {
//   step: 0,
//   up: function () {
//     this.step++;
//     return this;
//   },
//   down: function () {
//     this.step -= 1;
//     return this;
//   },
//   showStep: function () {
//     console.log(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep();
//
// //Lesson 9//
//
// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 600 },
//   ],
//   development: {
//     web: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };
// function sumOfSalaries(department) {
//   if (Array.isArray(department)) {
//     let total = 0;
//     for (let worker of department) {
//       total += worker.salary;
//     }
//     return total;
//   } else {
//     let total = 0;
//     for (let departmentBranch of Object.values(department)) {
//       total += sumOfSalaries(departmentBranch);
//     }
//     return total;
//   }
// }
// console.log(sumOfSalaries(company));
//
// //Lesson 10-1
// //Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.//
//
// const user = {
//   name: "Bob",
//   age: 28,
//   city: "Toronto",
//   country: "Canada",
//   getInfo() {
//     return `User: ${user.name}, age: ${user.age}, city: ${user.city}, country: ${user.country}`;
//   },
// };
// console.log(user.getInfo());
//
// //Lesson 10-2
// //Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.
//
// const firstArray = [1, 3, 105, 24, 78, 89, 36, 8];
// const secondArray = firstArray.filter((num) => num % 2 === 0);
// console.log(secondArray);
//
// //Lesson 10-3
// //Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.//
//
// const contactList = {
//   contacts: [
//     { name: "John", phone: +12657876354, email: "john@gmail.com" },
//     { name: "Lisa", phone: +15568887699, email: "lisa@yahoo.com" },
//     { name: "Kim", phone: +14578977565, email: "kim@yahoo.com" },
//   ],
// };
// const findContactByName = contactList.contacts.find(
//   (user) => user.name === "Lisa",
// );
// console.log(findContactByName);
//
// contactList.contacts.push({
//   name: "Bob",
//   phone: +18767643423,
//   email: "bob@gmail.com",
// });
// console.log(contactList);
//
// //lesson 20//
// const $form = $('.js--form');
// const $input = $('.js--form__input');
// const $todosWrapper = $('.js--todos-wrapper');
//
// const todos = JSON.parse(localStorage.getItem('todos')) || [];
//
// function setTodos() {
//   localStorage.setItem('todos', JSON.stringify(todos));
// }
//
// function updateTodos() {
//   $todosWrapper.empty();
//
//   todos.forEach((todo, index) => {
//     const $li = $('<li>', {class: 'todo-item'});
//
//     if (todo.completed) {
//       $li.addClass('todo-item--checked');
//     }
//
//     const $checkbox = $('<input>', {type: 'checkbox', checked: todo.completed});
//     $checkbox.on('change', () => markTaskAsDone(index));
//
//     const $span = $('<span>', {class: 'todo-item__description', text: todo.text});
//
//     const $deleteButton = $('<button>', {class: 'todo-item__delete', text: 'Видалити'});
//     $deleteButton.on('click', () => deleteTodo(index));
//
//     $li.on('click', function () {
//       const taskText = todo.text;
//       $('.modal-task-text').text(taskText);
//       $('.modal').modal('show');
//     });
//
//     $li.append($checkbox, $span, $deleteButton);
//
//     $todosWrapper.append($li);
//   });
// }
//
// $form.on('submit', function (e) {
//   e.preventDefault();
//   const value = $input.val();
//   if (value) {
//     addTodo(value);
//     $input.val('');
//   }
// });
//
// function addTodo(text) {
//   todos.push({text, completed: false});
//   setTodos();
//   updateTodos();
// }
//
// function deleteTodo(index) {
//   todos.splice(index, 1);
//   setTodos();
//   updateTodos();
// }
//
// function markTaskAsDone(index) {
//   const todo = todos[index];
//   todo.completed = !todo.completed;
//   setTodos();
//   updateTodos();
// }
//
// updateTodos();


//for Lesson 22//
function Student (name, lastName, yearOfBirth, marks) {
  this.name = name;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.marks = marks || [];
  this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.yearOfBirth;
};

Student.prototype.getAverageMark = function () {
  if (this.marks.length === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < this.marks.length; i++) {
    total += this.marks[i]
  }
  const sum = total;
  return sum / this.marks.length;
};

Student.prototype.present = function () {
  let index = this.attendance.indexOf(null);
  if (index !== -1) {
    this.attendance[index] = true;
  } else {
    console.log("All classes were marked");
  }
};

Student.prototype.absent = function () {
  let index = this.attendance.indexOf(null);
  if (index !== -1) {
    this.attendance[index] = false;
  } else {
    console.log("All classes were marked");
  }
};

Student.prototype.getAverageAttendance = function () {
  let total = 0;
  let visited = 0;

  for (let i = 0; i < this.attendance.length; i++) {
    if (this.attendance[i] !== null) {
      total++;
    }
    if (this.attendance[i] === true) {
      visited++;
    }
  }

  if (total > 0) {
    return visited / total;
  } else {
    return 0;
  }
}

Student.prototype.summary = function () {
  const averageMark = this.getAverageMark();
  const averageAttendance = this.getAverageAttendance();

  if (averageMark > 90 && averageAttendance > 0.9) {
    return "Молодець!";
  } else if (averageMark > 90 || averageAttendance > 0.9) {
    return "Добре, але можна краще";
  } else {
    return "Редиска!"
  }
};

const studentAnna = new Student('Anna', 'Roy', 2002, [75, 82, 90, 85]);
const studentBob = new Student('Bob', 'Smith', 2000, [96, 85, 100, 95]);
const studentAlex = new Student('Alex', 'Alexandrov', 2004, [99, 95, 92, 89]);

console.log(`Ім'я: ${studentAnna.name} ${studentAnna.lastName}`);
console.log(`Вік: ${studentAnna.getAge()}`);
console.log(`Середній бал: ${studentAnna.getAverageMark()}`);
studentAnna.present();
studentAnna.present();
studentAnna.absent();
studentAnna.present();
console.log(`Середнє відвідування: ${studentAnna.getAverageAttendance()}`);
console.log(`Підсумок: ${studentAnna.summary()}`);

console.log(`Ім'я: ${studentBob.name} ${studentBob.lastName}`);
console.log(`Вік: ${studentBob.getAge()}`);
console.log(`Середній бал: ${studentBob.getAverageMark()}`);
studentBob.present();
studentBob.present();
studentBob.present();
studentBob.present();
console.log(`Середнє відвідування: ${studentBob.getAverageAttendance()}`);
console.log(`Підсумок: ${studentBob.summary()}`);

console.log(`Ім'я: ${studentAlex.name} ${studentAlex.lastName}`);
console.log(`Вік: ${studentAlex.getAge()}`);
console.log(`Середній бал: ${studentAlex.getAverageMark()}`);
studentAlex.present();
studentAlex.absent();
studentAlex.absent();
studentAlex.present();
console.log(`Середнє відвідування: ${studentAlex.getAverageAttendance()}`);
console.log(`Підсумок: ${studentAlex.summary()}`);