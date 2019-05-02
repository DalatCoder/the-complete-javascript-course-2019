
/**
 * Lecture 1: Let and const
 */

 /*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);


// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; // error
console.log(name6); 
*/

// ES5
function driverLisence5(passedTest) {

  if (passedTest) {
    console.log(firstName); // hoisting
    var firstName = 'John';
    var yearOfBirth = 1990;

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }

}
driverLisence5(true);

// ES6
function driverLisence6(passedTest) {

  if (passedTest) {
    // console.log(firstName); //error
    let firstName = 'John';
    const yearOfBirth = 1990;

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
  }

}
driverLisence6(true);

/**
 * Lecture: Blocks and IIFEs
 */

/*
// ES6
{
  const a = 1;
  let b = 2;
  var c = 5;
}

// console.log(a + b); // error
console.log(c);

// ES5
(function() {
  var c = 3;
})();
// console.log(c); // error
*/

/**
 * Lecture: Strings
 */

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
  return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);



