 //LET, VAR & CONST///
//QUESTION 1
const PI = 3.14159;
console.log(PI); // Output: 3.14159
//QUESTION 2
function sumOfSquares(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const square = numbers[i] * numbers[i];
      sum += square;
    }
    return sum;
  }
  const numbersArray = [1, 2, 3, 4];
  console.log(sumOfSquares(numbersArray)); // Output: 30 (1^2 + 2^2 + 3^2 + 4^2 = 30)\
//QUESTION 3
const stringsArray = ["apple", "banana", "cherry"];
for (let i = 0; i < stringsArray.length; i++) {
  let firstLetter = stringsArray[i][0];
  console.log(firstLetter);
}// Output: "a", "b", "c"
//QUESTION 4
const ASTERISK = '*';
function generateAsterisks(n) {
  return ASTERISK.repeat(n);
}
console.log(generateAsterisks(5)); // Output: "***"
//QUESTION 5
function generateGreeting(personData) {
    const greetingMessage = `Hello, my name is ${personData.name} and I am ${personData.age} years old.`;
    return greetingMessage;
  }

  const personObject = { name: "Hani", age: 20 };
  console.log(generateGreeting(personObject)); // Output: "Hello, my name is samia and I am 20 years old."
//QUESTION 6
function findMaxValue(numbers) {
    let max = Math.max(...numbers);
    return max;
  }
  const numbersArray2 = [10, 5, 7, 25, 15];
  console.log(findMaxValue(numbersArray2)); // Output: 25
  
  //TEMPLATE STRINGS:
  //Question 1
  function greetPerson(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
  }
  const name = "samia";
  const age = 20;
  console.log(greetPerson(name, age)); // Output: "My name is samia and I am 20 years old."
  //Question 2
  function sumAndAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return `Sum: ${sum}, Average: ${average.toFixed(2)}`;
  }
  const numberArray = [1, 2, 3, 4, 5];
  console.log(sumAndAverage(numberArray)); // Output: "Sum: 15, Average: 3.00"
  //Question 3
  function createHTMLElement(tag, text) {
    return `<${tag}>${text}</${tag}>`;
  }
  const tagName = "h1";
  const elementText = "Hello, World!";
  console.log(createHTMLElement(tagName, elementText));// Output: "<h1>Hello, World!</h1>"  
  //Question 4
  function getProductInfo(product) {
    return `Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`;
  }
  const productObject = { name: "Widget", price: 9.99, quantity: 10 };
  console.log(getProductInfo(productObject));// Output: "Product: Widget, Price: $9.99, Quantity: 10"
  //Question 5
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const currentDate = new Date();
  console.log(formatDate(currentDate)); // Output: e.g., "28/07/2023"
  
  //DESTRUCTING:
  //Question 1
  function sumTwoNumbers(numbers) {
    const [num1, num2] = numbers;
    return num1 + num2;
  }
  const numbArray = [5, 7];
  console.log(sumTwoNumbers(numbArray)); // Output: 12
  //Question 2
  function getPersonInfo(person) {
    const { name, age, occupation } = person;
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
  } 
  const person23 = { name: "samia", age: 20, occupation: "physiologist" };
  console.log(getPersonInfo(person23)); // Output: "Name: samia, Age: 20, Occupation: physiologist"
  //Question 3
  function getHighestScorer(people) {
    const [highestScorer, ...rest] = people.sort((a, b) => b.score - a.score);
    return highestScorer.name;
  }
  const peopleArray23 = [
    { name: "sana", score: 85 },
    { name: "sehar", score: 92 },
    { name: "Zara", score: 78 },
  ];
  console.log(getHighestScorer(peopleArray23)); // Output: "zara"  
  //Question 4
  function getPersonInitials(person) {
    const { firstName, lastName, middleName = "" } = person;
    return `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`;
  }
  const personObject2 = { firstName: "bisma", lastName: "khalique" };
  console.log(getPersonInitials(personObject2)); // Output: "BK"
  //Question 5
  function getFirstAndLastElements(arr) {
    const [first, ...rest] = arr;
    const last = rest.pop();
    return { first, last };
  }
  const stringArray = ["apple", "banana", "cherry", "date"];
  console.log(getFirstAndLastElements(stringArray));// Output: { first: "apple", last: "date" }


  /////  MAPS ///////

/// QUESTION 1//////

const squareMap = (numbers) => {
    // Using the Map data structure to store the mapping of numbers to their squares
    const result = new Map();
  
    // Iterating through the array of numbers and calculating the square for each number
    for (const number of numbers) {
      const square = number * number;
      // Storing the mapping of the number to its square in the result map
      result.set(number, square);
    }
  
    return result;
  };
  
  // Test the function
  const numbersArray23 = [1, 2, 3, 4, 5];
  const resultMap1 = squareMap(numbersArray23);
  console.log(resultMap1); // Output: Map { 1 => 1, 2 => 4, 3 => 9, 4 => 16, 5 => 25 }
  
/// QUESTION 2//////

const mapNamesToAges = (people) => {
    // Using the Map data structure to store the mapping of names to ages
    const result = new Map();
  
    // Iterating through the array of objects and extracting name-age pairs
    for (const person of people) {
      const { name, age } = person;
      // Storing the mapping of the name to its corresponding age in the result map
      result.set(name, age);
    }
  
    return result;
  };
  
  // Test the function
  const peopleArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 27 },
  ];
  
  const resultMap = mapNamesToAges(peopleArray);
  console.log(resultMap);
  // Output: Map { 'Alice' => 25, 'Bob' => 30, 'Charlie' => 22, 'David' => 27 }


  /// QUESTION 3//////
  
  const hasKeyInMap = (map, key) => {
    // Using the Map's built-in 'has' method to check if the key exists in the map
    return map.has(key);
  };
  
  // Test the function
  const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]);
  
  console.log(hasKeyInMap(myMap, 'b')); // Output: true
  console.log(hasKeyInMap(myMap, 'd')); // Output: false
  

/// QUESTION 4//////

const filterMapByCallback = (map, callback) => {
    // Using the Map and Object.fromEntries to create a new map with filtered key-value pairs
    const filteredEntries = [...map.entries()].filter(([key, value]) => callback(key, value));
    const filteredMap = new Map(filteredEntries);
    return filteredMap;
  };
  
  // Test the function
  const myMap1 = new Map([
    ['apple', 5],
    ['banana', 10],
    ['orange', 8],
    ['grapes', 15],
  ]);
  
  const filteredMap = filterMapByCallback(myMap1, (key, value) => value > 8);
  console.log(filteredMap);
  // Output: Map { 'banana' => 10, 'grapes' => 15 }
  

/// QUESTION 5//////

const mergeMaps = (map1, map2) => {
    // Creating a new map to hold the merged key-value pairs
    const mergedMap = new Map();
  
    // Adding key-value pairs from the first map to the merged map
    for (const [key, value] of map1) {
      mergedMap.set(key, value);
    }
  
    // Adding or overwriting key-value pairs from the second map to the merged map
    for (const [key, value] of map2) {
      mergedMap.set(key, value);
    }
  
    return mergedMap;
  };
  
  // Test the function
  const map1 = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  
  const map2 = new Map([
    ['b', 3],
    ['c', 4],
  ]);
  
  const mergedMap = mergeMaps(map1, map2);
  console.log(mergedMap);
  // Output: Map { 'a' => 1, 'b' => 3, 'c' => 4 }
  

  ////  CLASSES //////

  /// QUESTION 2 //////


// Step a: Create a class for Person including the constructor for firstname and lastname.
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  // Step b: Create a variable and assign a value of the new Person object using your friend's first and last names.
  const friend1 = new Person('John', 'Doe');
  
  // Step c: Now add a second variable with another friend's name using their first name and last name.
  const friend2 = new Person('Jane', 'Smith');
  
  // Step d: Output both friends into the console with a greeting of hello.
  console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
  console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);
  
/// QUESTION 3 //////

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     introduction() {
//       return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
//     }
//   }
  
//   // Test the class
//   const person1 = new Person('Alice', 25);
//   console.log(person1.introduction()); // Output: Hi, my name is Alice, and I am 25 years old.
  
//   const person2 = new Person('Bob', 30);
//   console.log(person2.introduction()); // Output: Hi, my name is Bob, and I am 30 years old.
  

  /// QUESTION 4 //////

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate the area of the rectangle
    getArea() {
      return this.width * this.height;
    }
  
    // Method to calculate the perimeter of the rectangle
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Test the class
  const rectangle1 = new Rectangle(5, 10);
  console.log('Area:', rectangle1.getArea()); // Output: Area: 50
  console.log('Perimeter:', rectangle1.getPerimeter()); // Output: Perimeter: 30
  
  const rectangle2 = new Rectangle(7, 3);
  console.log('Area:', rectangle2.getArea()); // Output: Area: 21
  console.log('Perimeter:', rectangle2.getPerimeter()); // Output: Perimeter: 20
  
/// QUESTION 6 //////


class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Method to calculate and return the diameter of the circle
    getDiameter() {
      return 2 * this.radius;
    }
  
    // Method to calculate and return the circumference of the circle
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Method to calculate and return the area of the circle
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Test the class
  const circle1 = new Circle(5);
  console.log('Diameter:', circle1.getDiameter()); // Output: Diameter: 10
  console.log('Circumference:', circle1.getCircumference()); // Output: Circumference: 31.41592653589793
  console.log('Area:', circle1.getArea()); // Output: Area: 78.53981633974483
  
  const circle2 = new Circle(7);
  console.log('Diameter:', circle2.getDiameter()); // Output: Diameter: 14
  console.log('Circumference:', circle2.getCircumference()); // Output: Circumference: 43.982297150257104
  console.log('Area:', circle2.getArea()); // Output: Area: 153.93804002589985
  

/// QUESTION 6//////

class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduction() {
      return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, course) {
      // Call the parent class's constructor using super
      super(name, age);
      this.course = course;
    }
  
    // Override the introduction method of the parent class
    introduction() {
      return `Hi, my name is ${this.name}, and I am ${this.age} years old. I am a student studying ${this.course}.`;
    }
  }
  
  // Test the classes
  const student1 = new Student('Alice', 20, 'Computer Science');
  console.log(student1.introduction());
  // Output: Hi, my name is Alice, and I am 20 years old. I am a student studying Computer Science.
  
  const student2 = new Student('Bob', 22, 'Physics');
  console.log(student2.introduction());
  // Output: Hi, my name is Bob, and I am 22 years old. I am a student studying Physics.
  



/// QUESTION 7 //////

class Rectangle1 {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate the area of the rectangle//11
    getArea() {
      return this.width * this.height;
    }
  
    // Method to calculate the perimeter of the rectangle
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      // Call the parent class's constructor with the same side value for width and height
      super(side, side);
    }
  
    // Override the getArea method of the parent class to use the side instead of width and height
    getArea() {
      return this.width ** 2;
    }
  
    // Override the getPerimeter method of the parent class to use the side instead of width and height
    getPerimeter() {
      return 4 * this.width;
    }
  }
  
  // Test the classes
  const square1 = new Square(5);
  console.log('Area:', square1.getArea()); // Output: Area: 25
  console.log('Perimeter:', square1.getPerimeter()); // Output: Perimeter: 20
  
  const square2 = new Square(7);
  console.log('Area:', square2.getArea()); // Output: Area: 49
  console.log('Perimeter:', square2.getPerimeter()); // Output: Perimeter: 28
  

/////HOISTING///////


///// QUESTION 1///////
function printVariable() {
    console.log(myVar); // Output: undefined
    var myVar = 5;
    console.log(myVar); // Output: 5
  }
  
  printVariable();
  


///// QUESTION 2///////

// function printValue() {
//     let myVar = 'Hello';
//     console.log(myVar); // Output: Hello
//   }
  
//   printValue();
//   console.log(myVar); // This will result in an error
  




///// QUESTION 3///////

// function printValue() {
//     const myVar = 'Hello';
//     console.log(myVar); // Output: Hello
//   }
  
//   printValue();
//   console.log(myVar); // This will result in an error
  



///// QUESTION 4///////

// function printValue() {
//     console.log(undeclaredVar); // This will result in an error
//   }
  
//   printValue();
  

  //// QUESTION 5///////

// Function declaration
function foo() {
    console.log("Hello from foo!");
  }
  
  function callFoo() {
    foo(); // Calling the function declared below
  }
  
  callFoo(); // Output will be "Hello from foo!"
  


  ///// THIS KEY WORD /////


//// QUESTION 1///////

const person13 = {
    name: "John",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  person.greet(); // Output will be "Hello, my name is John."
  


//// QUESTION 2///////

function Car(brand) {
    this.brand = brand;
    this.speed = 0;
  
    this.accelerate = function(value) {
      this.speed += value;
    };
  
    this.printSpeed = function() {
      console.log(`Current speed of ${this.brand} car: ${this.speed} km/h`);
    };
  }
  
  // Creating an instance of Car
  const myCar = new Car("Toyota");
  
  // Using the methods
  myCar.accelerate(30);
  myCar.printSpeed(); // Output: "Current speed of Toyota car: 30 km/h"
  
  myCar.accelerate(20);
  myCar.printSpeed(); // Output: "Current speed of Toyota car: 50 km/h"
  


//// QUESTION 3///////

const calculator = {
    value: 0,
  
    add: function(num) {
      this.value += num;
    },
  
    subtract: function(num) {
      this.value -= num;
    },
  
    multiply: function(num) {
      this.value *= num;
    },
  
    printValue: function() {
      console.log(`Current value: ${this.value}`);
    }
  };
  
  // Using the methods
  calculator.add(10);
  calculator.printValue(); // Output: "Current value: 10"
  
  calculator.subtract(5);
  calculator.printValue(); // Output: "Current value: 5"
  
  calculator.multiply(2);
  calculator.printValue(); // Output: "Current value: 10"
  

//// QUESTION 4///////
const calculator1 = {
    value: 0,
  
    add: function(num) {
      this.value += num;
    },
  
    subtract: function(num) {
      this.value -= num;
    },
  
    multiply: function(num) {
      this.value *= num;
    },
  
    printValue: function() {
      console.log(`Current value: ${this.value}`);
    }
  };
  
  // Using the methods
  calculator.add(10);
  calculator.printValue(); // Output: "Current value: 10"
  
  calculator.subtract(5);
  calculator.printValue(); // Output: "Current value: 5"
  
  calculator.multiply(2);
  calculator.printValue(); // Output: "Current value: 10"
  

//// QUESTION 5///////

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
  
    printInfo: function() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Number of Pages: ${this.pages}`);
    }
  };
  
  // Using the printInfo method
  book.printInfo();
  




//// QUESTION 6///////


const counter = {
    count: 0,
  
    increment: function() {
      this.count += 1;
    },
  
    reset: function() {
      this.count = 0;
    }
  };
  
  // Using the methods
  counter.increment();
  console.log(counter.count); // Output: 1
  
  counter.increment();
  console.log(counter.count); // Output: 2
  
  counter.reset();
  console.log(counter.count); // Output: 0
  


//// QUESTION 7///////

const product = {
    name: "Laptop",
    price: 1000,
    discount: 0.1, // 10% discount
  
    calculateDiscountedPrice: function() {
      return this.price - (this.price * this.discount);
    }
  };
  
  // Using the calculateDiscountedPrice method
  const discountedPrice = product.calculateDiscountedPrice();
  console.log(discountedPrice); // Output: 900
  


//// QUESTION 8///////

const game = {
    playerName: "John",
    score: 0,
  
    play() {
      // Your game logic here
      console.log(`${this.playerName} is playing the game.`);
      this.score += 10;
      console.log(`Score: ${this.score}`);
    }
  };
  
  game.play(); // Output: "John is playing the game." and "Score: 10"


  /////////for of loop///////
////////question 1/////////

// Create the fruits array with some fruit names
const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];

// Use a for...of loop to iterate over the array and log each fruit name
for (const fruit of fruits) {
  console.log(fruit);
}

///////question 2//////////

// Create the message string with some text
const message = "Hello, World!";

// Use a for...of loop to iterate over the characters of the string and log each character
for (const character of message) {
  console.log(character);
}

//////////question 3/////////

// Create the person object with properties
const person1 = {
    name: "John Doe",
    age: 30,
    country: "United States",
  };
  
  // Use a for...in loop to iterate over the properties of the object and log each property value
  for (const property in person1) {
    if (person1.hasOwnProperty(property)) {
      console.log(`${property}: ${person1[property]}`);
    }
  }

  /////////////question 4///////////

  // Create the person object with properties
const person = {
    name: "John Doe",
    age: 30,
    country: "United States",
  };
  
  // Extract the property values into an array using Object.values()
  const propertyValues = Object.values(person);
  
  // Use a for...of loop to iterate over the property values and log each value
  for (const value of propertyValues) {
    console.log(value);
  }
  
  ////////////question 5/////////

  // Create the colors Set with some color names
const colors = new Set(['Red', 'Green', 'Blue', 'Yellow', 'Orange']);

// Use a for...of loop to iterate over the Set and log each color
for (const color of colors) {
  console.log(color);
}

////////////question 6////////////

// a. Create an empty array
const myArray = [];

// b. Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}

// c. Log the array into the console
console.log("Array contents:", myArray);

// d. Use the for loop to iterate through the array and output into the console
console.log("Output using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// e. Use the for of loop to output the value into the console from the array
console.log("Output using for...of loop:");
for (const value of myArray) {
  console.log(value);
}

//////////////for in loop//////////////
/////////question 1//////////////

// a. Create a simple object with three items in it
const myObject = {
    name: "John Doe",
    age: 30,
    country: "United States",
  };
  
  // b. Using the for...in loop, get the properties' names and values from the object
  //    and output them into the console
  console.log("Output using for...in loop:");
  for (const property in myObject) {
    if (myObject.hasOwnProperty(property)) {
      console.log(`${property}: ${myObject[property]}`);
    }
  }
  
  // c. Create an array containing the same three items
  const myAray = ["John Doe", 30, "United States"];
  
  // Using the for loop, output the values from the array into the console
  console.log("Output using for loop:");
  for (let i = 0; i < myAray.length; i++) {
    console.log(myAray[i]);
  }
  
//////////////question 2//////////

// Create the person object with properties
const persn = {
    name: "John Doe",
    age: 30,
    country: "United States",
  };
  
  // Use a for...in loop to iterate over the properties of the object and log each property name
  for (const property in persn) {
    if (persn.hasOwnProperty(property)) {
      console.log(property);
    }
  }
  
/////////////question 3////////////

// Create the numbers array with some numeric values
const numbers = [10, 20, 30, 40, 50];

// Use a for loop to iterate over the array and log each index
for (let i = 0; i < numbers.length; i++) {
  console.log(i);
}

////////question 4////////////

// Create the message string with some text
const mesage = "Hello, World!";

// Use a for...in loop to iterate over the characters of the string and log each character
for (const index in mesage) {
  console.log(mesage[index]);
}

////////////question 5///////////

// Create the scores Map with keys as names and values as scores
const scores = new Map([
    ['John', 85],
    ['Alice', 92],
    ['Bob', 78],
  ]);
  
  // Use a for...of loop to iterate over the Map and log each name and score pair
  for (const [name, score] of scores) {
    console.log(`${name}: ${score}`);
  }

  /////////question 6/////////////

  // Create the car object with properties
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
  };
  
  // Use a for...in loop to iterate over the properties of the object and log each property value
  for (const property in car) {
    if (car.hasOwnProperty(property)) {
      console.log(car[property]);
    }
  }

  //////////asyunc and await//////////
////////////question 1///////////////

async function delayedGreeting(name) {
    // Wrap the setTimeout function in a Promise to use async/await
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Hello, ${name}! Welcome to our website.`);
  }
  
  // Call the delayedGreeting function
  delayedGreeting("John");

  /////////question 2//////////

  function fetchData() {
    return new Promise((resolve) => {
      // Simulate an asynchronous API call with a 3-second delay
      setTimeout(() => {
        const data = { message: "Data received successfully!" };
        resolve(data);
      }, 3000); // 3 seconds delay
    });
  }
  
  // Using async/await to call the fetchData function
  async function fetchAndLogData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Call the fetchAndLogData function
  fetchAndLogData();

  ///////////question 3///////////

  function fetchUsers() {
    return new Promise((resolve) => {
      // Simulate an asynchronous API call with a 4-second delay
      setTimeout(() => {
        const users = [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Alice Johnson" },
          { id: 3, name: "Bob Smith" },
        ];
        resolve(users);
      }, 4000); // 4 seconds delay
    });
  }
  
  // Using async/await to call the fetchUsers function
  async function fetchAndLogUsers() {
    try {
      const users = await fetchUsers();
      console.log(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  // Call the fetchAndLogUsers function
  fetchAndLogUsers();

  ///////////question 4///////////

  async function fetchData(id) {
    try {
      const response = await fetch(`https://bismakhan-api.com/data/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching data for id ${id}. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching data for id ${id}: ${error.message}`);
    }
  }
  
  // Example usage
  async function fetchAndLogData() {
    try {
      const id = 123; // Replace with the desired id
      const data = await fetchData(id);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Call the fetchAndLogData function
  fetchAndLogData();
  
  //////////question 5////////////////

  function fetchData(id) {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous API call with a 5-second delay
      setTimeout(() => {
        const data = { id, message: "Fetched data successfully!" };
        resolve(data);
      }, 5000); // 5 seconds delay
    });
  }
  
  // Using async/await to call the fetchData function
  async function fetchAndLogData() {
    try {
      const id = 123; // Replace with the desired id
      const data = await fetchData(id);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Call the fetchAndLogData function
  fetchAndLogData();
  
  ////////////question 6///////////

  // a. Create a global value for the counter
let globalCounter = 0;

// b. Create a function that returns a Promise with a setTimeout
function timeout(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      globalCounter++;
      resolve({ counter: globalCounter, value });
    }, 1000); // 1 second delay
  });
}

// d. Create an asynchronous function to output counter and value into the console
async function outputCounterAndValue(value) {
  const result = await timeout(value);
  console.log(`Global Counter: ${result.counter}, Function Argument: ${result.value}`);
}

// e. Create a loop to iterate 10 times, invoking the async function
async function main() {
  for (let i = 1; i <= 10; i++) {
    await outputCounterAndValue(i);
  }
}

// Call the main function
main();

//////////// closure ///////////
////////question 1//////////////

function counter() {
    let count = 0; // Counter variable is defined within the outer function
  
    // Returned function is a closure and has access to the outer function's scope
    return function () {
      count++;
      console.log(count);
    };
  }
  
  // Create two separate counter functions with their own counter variables
  const incrementCounter1 = counter();
  const incrementCounter2 = counter();
  
  // Increment and log the counter values
  incrementCounter1(); // Output: 1
  incrementCounter1(); // Output: 2
  incrementCounter1(); // Output: 3
  
  incrementCounter2(); // Output: 1
  incrementCounter2(); // Output: 2

  ///////////////question 2/////////

  function createMultiplier(factor) {
    return function (number) {
      return factor * number;
    };
  }
  
  // Create a multiplier function with a factor of 5
  const multiplyBy5 = createMultiplier(5);
  
  // Use the multiplier function to multiply a number
  console.log(multiplyBy5(10)); // Output: 50 (5 * 10)
  console.log(multiplyBy5(7));  // Output: 35 (5 * 7)

  /////////question 3//////////////

  function secretMessage(secret) {
    return function (message) {
      console.log(`Secret Message: ${secret} - ${message}`);
    };
  }
  
  // Create a secretMessage function with a secret
  const revealSecret = secretMessage("I am SAMIA!");
  
  // Use the revealSecret function to log the secret message along with a provided message
  revealSecret("Hello, PRETTY!"); // Output: Secret Message: I am samia! - Hello, PRETTY!
  revealSecret("I will protect you."); // Output: Secret Message: I am Batman! - I will protect you.

  ////////////question 4////////////

  function calculate(num1, num2) {
    return {
      add: function () {
        return num1 + num2;
      },
      multiply: function () {
        return num1 * num2;
      },
    };
  }
  
  // Create a calculator for numbers 5 and 3
  const calculator23 = calculate(5, 3);
  
  // Use the calculator to perform addition and multiplication
  console.log(calculator.add());      // Output: 8 (5 + 3)
  console.log(calculator.multiply()); // Output: 15 (5 * 3)