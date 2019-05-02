
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

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));

console.log(n.endsWith('Sm'));

console.log(n.includes('oh'));

console.log(`${firstName} `.repeat(5));

/**
 * Arrow function
 */

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(current) {
  var now = new Date().getFullYear();
  return now - current;
});
console.log(ages5);

// ES6
let ages6 = years.map(  el => 2019 - el  );
console.log(ages6);


ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);


// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number: ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
};
// box5.clickMe();


// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {

    document.querySelector('.green').addEventListener('click', () => {
      const str = `This is box number: ${this.position} and it is ${this.color}`;
      alert(str);
    })
  }
}
box6.clickMe();


function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriend5 = function(friends) {

  var arr = friends.map(function(current) {
    return this.name + ' is friends with ' + current;
  }.bind(this));

  console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriend5(friends);

// ES6
Person.prototype.myFriend6 = function(friends) {

  var arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);

}

new Person('John').myFriend6(friends);

/**
 * Destructuring
 */

// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
console.log(name);
console.log(age);

// ES6
const [name6, age6] = ['John', 26];
console.log(name6);
console.log(age6);


const obj = {
  firstName6: 'John',
  lastName6: 'Smith'
};

// Variable name match the key
const {firstName6, lastName6} = obj;
console.log(firstName6);
console.log(lastName6);

const {firstName6: a, lastName6: b} = obj;
console.log(a);
console.log(b);




function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age1, retirement] = calcAgeRetirement(1990);
console.log(age1);
console.log(retirement);









