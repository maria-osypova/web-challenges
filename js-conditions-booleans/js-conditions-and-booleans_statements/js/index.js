console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984!");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1;
let pricePerHotdog;

if (numberOfHotdogs > 5) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  pricePerHotdog = 1;
} else {
  pricePerHotdog = 0.1;
}

console.log("Total price:", pricePerHotdog * numberOfHotdogs, "euros");

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
