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

// for (i = 0; i <=10; i++) {
// 	console.log(i);
// }

//2. Write a loop that will print out all the numbers from 10
// up to and including 400.

// for (i = 10; i <= 400; i++) {
// 	console.log(i);
// }

//3. Write a loop that will print out every third number 
//starting with 11 and going no higher than 4000.

// for (i = 11; i <= 4000; i += 3) {
// 	console.log(i);	
// 	}

//B. GET EVEN

//Print out the numbers that are within the range of 1 - 100.
// for (i = 1; i <= 100; i++) {
// 	console.log(i);
// }

//Adjust your code to add a message next to even numbers only
// that says: "<-- is an even number".

for (i = 1; i <= 100; i++) {
	if(i%2 === 0){
		console.log(`${i} is an even number`);
	} else {
		console.log(i);
	}
}















































