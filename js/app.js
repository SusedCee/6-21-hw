console.log("Page is working");

//avoid var Use const or let!!


// I 	VARIABLES AND DATATYPES


//A. Q + A

//1. How do we assign a value to a variable?
//First you have to create an object then use curly brackets
//to have a list of variables with their vales.
//Example:
//  const skateboard = {
// 	wheels: 4,
// 	gripColor: "Toy Machine", 
// 	graphic: "Monster graphic",
// }

//2. How do we change the value of a variable?
//By typing:
//nameOfObject["nameOfVariable"] = 'newValue';
//or
//variable = newValue;

//3. How do we assign an existing variable to a new variable?
// We can do the above (#2) or we can get a value from another
//variable.

//4. Remind me, what are declare, assign, and define?
//declare is creating a variable 
//assign is giving values to variables 
//define is putting a function where you want to use it

//5. What is pseudocoding and why should you do it?
//Pseudocoding is writing down in comments what you want your code to
//do before you use it or if you want to reference later after
//you have finished for reference.


//6. What percentage of time should be spent thinking about how
// you're going to solve a problem vs actually typing in code to
// solve it?
//I think most of the time should be solving the problem first 
//, but when staring off everything might take a really long time.


//B. STRINGS
//1.Create a variable called firstVariable.
// -Assign it the value of the string "Hello World"
// -Change the value of this variable to some number.
// -Store the value of firstVariable in a new variable called secondVariable
// -Change the value of secondVariable to any string.
// -What is the value of firstVariable?

// let firstVariable = 'Hello World'; //using let that way i can change the value
// let secondVariable = ("");
// firstVariable = 23;
// firstVarable = secondVariable;
// secondVariable = "Hello Universe";


// console.log(firstVariable);

//2. Create a variable called yourName and set it equal to your 
//name as a string. Then, write an expression that takes the string
// "Hello, my name is " and the variable yourName so that it 
//returns a new string with them concatenated.

// const yourName = 'Sused Cabrera';
// console.log("Hello, my name is " + yourName);


//ex: Hello, my name is Jean Valjean


//C.BOOLEANS
//Using the provided variable definitions, replace the blanks so that
// all log statements print true in the console. Answers should be all
// be valid JS syntax and not weird things that don't make sense but
// happen to print true to the console.

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false); // &&, || with this one will always be false!
// console.log(e && 'Kevin');
// console.log(a && b && c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
// console.log(a || a && d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 || '48');


//D. THE FARM
//1.  Declare a variable animal. Set it to be either "cow" or 
//something else.
//2.  Write code that will print out "mooooo" if the it is equal
// to cow.
//3.  Change your code so that if the variable animal is anything
// other than a cow, it will print "Hey! You're not a cow."
//4.  Commit.


// const animal = 'cow';

// 	if (animal === 'cow') {
// 		console.log('mooooo');
// 	} else {
// 		console.log("Hey! You're not a cow.")	
// 	}


//E. DRIVER'S ED
//1. Make a variable that holds a person's age. Be semantic.

//2. Write code that will print out "Here are the keys!", 
//if the age is 16 years or older, or, if the age is younger
//than 16, a message should print "Sorry, you're too young."

// function ageOfPerson(age) {
// 	if (age >= 16){
// 		return "Here are the keys!";
// 	} else {
// 		return "Sorry, you're too young."
// 	}
// 	return age;
// }

// console.log(ageOfPerson(15));
// console.log(ageOfPerson(18));



//II. LOOPS

//A. THE BASICS
//1. Write a loop that will print out all the numbers from 0 
//to 10, inclusive.

// for (let i = 0; i <=10; i++) {
// 	console.log(i);
// }

//2. Write a loop that will print out all the numbers from 10
// up to and including 400.

// for (let i = 10; i <= 400; i++) {
// 	console.log(i);
// }

//3. Write a loop that will print out every third number 
//starting with 11 and going no higher than 4000.

// for (let i = 11; i <= 4000; i += 3) {
// 	console.log(i);	
// 	}

//B. GET EVEN

//1. Print out the numbers that are within the range of 1 - 100.
// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// }

//2. Adjust your code to add a message next to even numbers only
// that says: "<-- is an even number".

// for (let i = 1; i <= 100; i++) {
// 	if(i%2 === 0){
// 		console.log(`${i} is an even number`);
// 	} else {
// 		console.log(i);
// 	}
// }

//C. GIVE ME FIVE

//1. For the numbers 0 - 100, print out "I found a number. 
//High five!" if the number is a multiple of five.
// for (let i = 1; i <= 100; i++) {
// 	if (i%5 === 0) {
// 		console.log(`I found a ${i}. High five!`);
// 	}
// }

//2. Add to the code from above to print out "I found a 
// number. Three is a crowd" if the number is a multiple
// of three.

// for (let i = 1; i <= 100; i++) {
// 	if (i%5 === 0) {
// 		console.log(`I found a ${i}. High five!`);
// 	}
// 	if (i%3 === 0) {
// 		console.log(`I found a ${i}. Three is a crowd`)
// 	}
// }

// D. SAVINGS ACCOUNT

// 1. Write code that will save the sum of all the numbers
// between 1 - 10 to a variable called bank_account.

// function  sumArray (amount) {
// 	var bank_account = 0;
// 	for (i = 0; i < amount.length; ++i) {
// 		bank_account += amount[i];
// 	} 
// 	return bank_account;
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  //=> 55

//2. You got a bonus! Your pay is now doubled each week.----------------------------------------
//  Write code that will save the sum of all the numbers 
//between 1 - 100 multiplied by 2.

 // more info https://stackoverflow.com/questions/17369779/how-to-write-a-function-to-double-numbers-and-pass-them-as-to-an-object
// https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0

// var sumArray = Array(100);
// var bank_account = []; {
// 	for (i = 0; i < sumArray.length; i++) {
// 		bank_account += sumArray[i];
// 	}
// 	return bank_account;
// }
// var n = sumArray.toFixed(2);
// // return bank_account;
// console.log(sumArray);


// E. MULTIPLES OF 3 AND 5

//If we list all the natural numbers below 10 that are multiples of 
//3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000. If a previous---------------------------
// question you've done has helpful bits of code in it that partially 
//solves this problem, look back at them.

//You just solved Project Euler problem 1!

//Are you having dejà vu? This just in! From the "Read the entire 
//problem before you start" dept: This problem was on a previous assignment. 
//You may skip it if you've already done it, just include a comment saying 
//that you've already done it. If you've now done the problem twice, perhaps 
//next time you'll read the whole problem before starting it.


// for (let i = 1; i <= 1000; i++){
// 	if(i%3 === 0){
// 		console.log(`${i}`);
// 	} if(i%5 === 0){
// 		console.log(`${i}`);
// 	}
// }


// III. ARRAYS AND CONTROL FLOW

//A. TALK ABOUT IT

//1. What are the things in an array called?
//The things in an array are called values.

//2. Do Arrays guarantee those things will be in order?
// Arrays need to be organized and not guaranteed.

//3. What real-life thing could you model with an array?
//One thing that can be modeled is a persons information 
//like name, age, and email.


//B. EASY DOES IT

//1. Create an array that contains three quotes and store
// it in a variable called quotes.

// const quotes = ["Be yourself, everyone else is already taken.", "So many books, so little time.", "Be the change that you wishto see in the world."];

// console.log(quotes);
// console.log(quotes[0]);


// //C. ACCESSING ELEMENTS

// const randomThings = [1, 10, "Hello", true];

// //1. How do you access the 1st element in the array?
// console.log(randomThings[0]);

// //2. Change the value of "Hello" to "World".
// randomThings[2] = "World";

// //3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);


//D. CHANGE VALUES

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // //1.  What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);

// // //2.  Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";
// console.log(ourClass);

// // //3.  Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City");
// console.log(ourClass);


//E. MIXED IT UP

// const myArray = [5, 10, 500, 20]

// // 1. Add the string "Egon" to the end of the array. Add another string of 
// // your choice to the end of the array.
// myArray.push("Egon", "Sarah");
// console.log(myArray);

// // 2. Remove the 5 from the beginning of the array.
// myArray.shift([0]);
// console.log(myArray);

// // 3. Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift('Bob Marley');
// console.log(myArray);

// // 4. Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);

// // 5. Reverse this array using Array.prototype.reverse(). Did you mutate the
// //  array? What does mutate mean? Did the .reverse() method return anything?
// myArray.reverse();
// console.log(myArray);

// //the values were reversed 


//F. BIGGIE SMALLS

// const age = 120; {

// //1. 
// //console.log()s "little number" if the number is entered is less than 100
// 	if (age < 100) {
// 		console.log("little number");
// 	}
// //2. 
// //console.log()s big number if the number is greater than or equal to 100.
// 	if (age >= 100) {
// 		console.log("Big number");
// 	}
// }


//G. MONKEY IN THE MIDDLE

//1. console.log() little number if the number entered is less than 5.
// const age = 8; {

// //2. If the number entered is more than 10, log big number.
// 	if (age > 10) {
// 		console.log("Big number");

// //3. Otherwise, log "monkey". 
// 	} else {
// 		console.log("monkey");
// 	} 
// }


//H. WHAT'S IN YOUR CLOSET? -------------------------------------------------

//Below, we've given you examples of Kristyn and Thom's 
//closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this 
// //nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];


//1.  What's Kristyn wearing today? Using bracket notation
// to access items in kristynsCloset, log the sentence "Kristyn
// is rocking that " + the third item in Kristyn's closet + " today!" 
//to the console.


//2.  Kristyn just bought some sweet shades! Add "raybans" to her 
//closet after "yellow knit hat".


//3.  Kristyn spilled coffee on her hat... modify this item to read
// "stained knit hat" instead of yellow.


//4.  Put together an outfit for Thom! Using bracket notation, access
// the first element in Thom's shirts array.


//5.  In the same way, access one item from Thom's pants array.


//6.  Access one item from Thom's accessories array.


//7.  Log a sentence about what Thom's wearing. Example: "Thom is 
//looking fierce in a grey button-up, jeans and wool scarf!"


//8.  Get more specific about what kind of PJs Thom's wearing this 
//winter. Modify the name of his PJ pants to Footie Pajamas.



// IV. FUNCTIONS


//A. printGreeting

//Done already


//B. Write a function printCool that accepts one parameter, name as
// an argument. The function should print the name and a message 
//saying that that person is cool.

// const printCool = (name) => {
// 	console.log(name + " is cool");
// }
// console.log(printCool("Captain Reynolds")); //=> "Captain Reynolds is cool";

//C. calculateCube

// Write a function calculateCube that takes a single number and 
// prints the volume of a cube made from that number.

// function calculateCube(number) {
// 	return Math.pow(number, 3)
// }
// console.log(calculateCube(5));
// console.log(calculateCube(3));


//D. isVowel

//Write a function isVowel that takes a character (i.e. a string
// of length 1) and returns true if it is a vowel, false otherwise. 
//The vowel could be upper or lower case. Test your function on 
//every vowel and make sure it's working. In general, when you 
//write functions, take a minute to test them with different values
// to make sure they behave the way you want.

// function isVowel(character) {
// 	return ['a', 'e', 'i', 'o', 'u'].indexOf(character.toLowerCase()) !== -1
// }

// console.log(isVowel("a")); //=> true
// console.log(isVowel("A"));
// console.log(isVowel("z"));

//E. getTwoLengths -----------------------------------------------
//Write a function getTwoLengths that accepts two parameters (strings).
// The function should return an array of numbers where each number is
// the length of the corresponding string.


// const getTwoLengths = [array]; { 
// 	return getTwoLengths.length([array]);
// }
// console.log(getTwoLengths("Hank", "Hippopopalous")); // => [4, 13]


//F. getMultipleLengths ------------------------------------------------
//Write a function getMultipleLengths that accepts a single parameter
// as an argument: an array of strings. The function should return an 
//array of numbers where each number is the length of the corresponding 
//string.

//console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); //=> [5, 4, 2, 2, 4]


//G. maxOfThree ----------------------------------------
//Define a function maxOfThree that takes three numbers as arguments 
//and returns the largest of them. If all numbers are the same, it 
//doesn't matter which one is returned. If the two largest numbers 
//are the same, one of them should be returned. Be sure to test it 
//with larger values in each of the three locations.

// function maxOfThree(array) {
// 	return Math.max(array);
// }

// console.log(maxOfThree(6, 9, 1)); //9

//H. printLongestWord---------------------------------------
//Write a function printLongestWord that accepts a single argument, 
//an array of strings. The method should return the longest word in
// the array. In case of a tie, the method should return the word 
//that appears first in the array.

// function printLongestWord(strings) {

// 	return Math.max(strings);
// }


// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// //=> "Peanutbutter"

//I. transmogrify ---------------------------------------

//Write a Javascript function called transmogrify. This function 
//should accept three arguments, which you can assume will be numbers. 
//Your function should return the "transmogrified" result.



//The transmogrified result of three numbers is the product of the 
//first two numbers, raised to the power of the third number.

//For example, the transmogrified result of 5, 3, and 2 is 
//(5 times 3) to the power of 2 is 225.


//console.log(transmogrify(5, 3, 2)); //=> 225


//J. reverseWordOrder v2 -----------------------------------------------

// Without using .split(), .reverse(), or .join(), write a function 
// reverseWordOrder that accepts a single argument, a string. The 
// function should return a string with the order of the words reversed. 
// Don't worry about punctuation.


// See if you can do it without googling.


// Remember: You can index directly into a string:



//"hello world"[7] //=> "o"


//That and basic loops and variables and arrays are all you need 
//to solve this without the Array methods.


//console.log(reverseWordOrder("Ishmael me Call")); // => "Call me Ishmael"

//console.log(reverseWordOrder("I use Lâncome on my comb")); // => "comb my on Lâncome use I"


//K. Get down and dirty with Math.random() -----------------------------------

//1. Write a function that will return a random integer between
// 1 and 10. Test it.

//2. Write a function that will return a random integer between
// 10 and 100. Test it.

//3. Write a function that will return a random number between 
//532 and 13267. Test it.

//4. Write a function that will return a random number between 
//1 and 10. Test it.

//5. Add a few more quotes to the quotes array from question 
//III-B-1 above. Write a function that will take an array as a 
//parameter, and return a random element from that array. Call 
//your function a few times, passing in the quotes array. Give 
//it a nice semantic name like getRandomElement.


//V. OBJECTS


//A. MAKE A USER OBJECT

//1. Create an object called user.
//const user {} ;


//2. Write in to the object the key-value pairs for name, email, age, and purchased. 
//Set the value of purchased to an empty array []. Set the other values to whatever
// you would like.
const user = {
	name: "Sused",
	email: "sused.cabrera@gmail.com",
	age: 27,
	purchased: []
}

//B. UPDATE THE USER

//1. Our user has changed his or her email address. Without changing the original 
//user object, update the email value to a new email address.
user["email"] = "strivingsused@aol.com";
console.log(user["email"]);

// //2. Our user has had a birthday! Without changing the original user object, ----------------------------
// //increment the age value using the postfix operator. Hint: age++

// user[age]++;

// console.log(user["age"]);


//C. ADDING KEYS AND VALUES

//Without changing the original user object, add a new key location to the object,
// and give it a value or some-or-other location (a string).

user["location"] = "Denver";
console.log(user['location']);

//D. SHOPAHOLIC!

//1. Our user has purchased an item! They have purchased some "carbohydrates". Using
// .push(), add the string "carbohydrates" to the purchased array.
user["purchased"].push("carbohydrates");
console.log(user['purchased']);

// //2. Our user has purchased an item! They have purchased some "peace of mind". Using
// // .push(), add the string "peace of mind" to the purchased array.
user["purchased"].push("peace of mind");
console.log(user['purchased']);

// //3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using
// // .push(), add the string "Merino jodhpurs" to the purchased array.
user["purchased"].push("Merino jodhpurs");
console.log(user['purchased']);

// //4. Console.log just the "Merino jodhpurs" from the purchased array.

console.log(user['purchased'][2]);



//E. OBJECT-WITHIN-OBJECT---------------------------------------------

//Remember that you can add an object to an existing object in the same way
// that you can add any new property/value pair.

//If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}

// When we console.log user, we would see the friend object added to our user object.

// 1. Write a friend object into your user object and give the friend a name, age, 
//location, and purchased array (empty for now)

user.friend["friend"] = {
	name: "Conor",
	age: 32,
	location: "Boulder",
	purchased: []
}

console.log(user["friend"]); //------------------------------

// 2. Console.log just the friend's name-----------------------------
console.log(user["friend"]["name"]);

// 3. Console.log just the friend's location -----------------------
console.log(user["friend"]["location"]);

// 4. CHANGE the friend's age to 55----------------------------------
user.friend.friend["age"] = 55;
console.log(user.friend.age);

// 5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to -------------------------
//the friend's purchased array.
uuser.friend.friend[]

// 6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's ---------------------------
//purchased array.


// 7. Console.log just "A latte" from the friend's purchased array. ------------------------------


//F. LOOPS

// 1. Write a for loop that iterates over the User's purchased array ----------------------------------
//(NOT the friend's purchased array), and prints each element to the console.


// 2. Write a for loop that iterates over the Friend's purchased array, ----------------------------
//and prints each element to the console.



//G. FUNCTIONS CAN OPERATE ON OBJECTS

// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:------------------------
// -it should increment the user's age by 1
// -make the user's name uppercase



// The function does not need a return statement, it will merely modify the user object.

// 2. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of 
//hard-coding it to only work on our user object, make it take a parameter person, and have it modify 
//the object that is passed in as an argument when the function is called. Call your oldAndLoud function 
//with user as the argument.





















