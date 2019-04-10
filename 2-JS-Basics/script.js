
/**
 * Variables and date types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var $4year = 4;
var johnMark = 'John and Mark';
*/

/**
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
+ job + '. Is he married? ' + isMarried) ;
// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + 
job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/**
 * Basic operators
 */

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var joinOlder = ageJohn > ageMark;
console.log(joinOlder);


// typeof operator
console.log(typeof joinOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/**
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++;
console.log(x);
x--;
console.log(x);
*/

/**
 * CODING CHALLENGE 1
 */
/*
  Mark and John are trying to compare their BMI (Body
    Mass index), which is calculated using the formula:
    BMI = mass / height^2 = mass / (height * height).
    (mass is kg and height ini meter).
*/
/**
var massMark, massJohn, heightMark, heightJohn;
massMark = 70;
massJohn = 80;
heightMark = 1.8;
heightJohn = 1.7;

var BMIMark, BMIJohn;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

var BMIGreater = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + BMIGreater);

console.log('Hello world again');
*/
/**
 * If / else statements
 */
/**
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married') {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon: )');
}

var isMarried = false;
if (isMarried) {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will married soon: ');
}

// Coding challenge
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
	console.log('Mark\'s BMI is higher than John\'');
} else {
	console.log('John\'s BMI is higher than Marks\'s.');
}
*/
/** 
 * Boolean logic
 */
/**
var firstName = 'John';
var age = 16;

if (age < 13) {
	console.log(firstName + ' is a boy.';
} else {
	console.log(firstName + ' is a man.';
}

console.log('Hello world again);

function greeting() {
	console.log('Hello world');
}

*/

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drink juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
	var drink = 'beer';
} else {
	var drink = 'juice';
}

/**
 * Coding challenge 2
 */

 var scoreJohn = (89 + 128 + 103) / 3;
 var scoreMike = (116 + 94 + 123) / 3;
 var scoreMary = (97 + 134 + 105) / 3;
 console.log(scoreJohn, scoreMike, scoreMary);

//  if (scoreJohn > scoreMike) {
// 	 console.log('John\'s team wins with ' + scoreJohn + ' points');
//  } else if (scoreMike > scoreJohn) {
// 	 console.log('Mike\'s team wins with ' + scoreMike + ' points');
//  } else {
// 	 console.log('There is a draw');
//  }

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
	console.log('John\'s team wins with ' + scoreJohn + ' poinnts');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
	console.log('Mike\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
	console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
	console.log('There is a draw');
}

/**
 * Functions
 */
function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years.');
	} else {
		console.log(firstName + ' is already retired.');
	}
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(2000, 'Hieu');

/**
 * Function Statements and Expressions
 */

 // Function declaration


 // Function expression
 var whatDoYouDo = function(job, firstName) {
	 switch (job) {
		 case 'teacher':
			return firstName + ' teaches kids how to code';
		 case 'driver':
			return firstName + ' drives a cab in Lisbon.';
		 case 'designer':
			return firstName + ' designs beautiful websites';
		 default:
		 return firstName + ' does something else';
	 }
 }

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('driver', 'Mark	'));

/**
 * Arrays
 */

 // Initialize new array
 var names = ['John', 'Mike', 'Jane'];
 var years = new Array(1998, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 // Mutate array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);






