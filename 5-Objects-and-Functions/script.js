// Function constructor
/**
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create
/**
var personProto = {
  calculateAge : function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name : { value: 'Jane' },
  yearOfBirth : { value: 1969 },
  job: { value: 'designer' }
});
*/

/*
// Primitive and objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 38;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};
function change(a, b) {
  a = 38;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

// Lecture: Functions returning functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subjects do you teach, ' + name) + ' ?';
    };
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    };
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Jack');
interviewQuestion('designer')('Oggy');
interviewQuestion('streamer')('Dedee');

// Lecture IIFE
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// Invoking function
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// Invoking function with parameter
(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

(function (a, b) {
  var sum = a + b;
  console.log(a + ' + ' + b + ' = ' + sum);
})(1, 2);

// Closure
function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);

retirementUS(2000);
retirementGermany(2000);
retirementIceLand(2000);

function interviewQuestion1(job) {
  return function(name) {
    if (job === 'teacher') {
      console.log('What subjects do you teach, ' + name + '?');
    } else if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else {
      console.log('Hello , ' + name + ', What do you do?');
    }
  }
}
interviewQuestion1('designer')('Mark');


// Lecture: Bind, call and apply

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' +
      this.name + ', I\'m a ' +
      this.job + ' and I\'m ' +
      this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.job +
      ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['friendly', 'afternoon']);
john.presentation.call(emily, 'formal', 'night');
john.presentation.call(emily, 'formal', 'noon');
john.presentation.call(emily, 'friendly', 'morning');

var mark = {
  name: 'Mark',
  age: 20,
  job: 'student'
}

john.presentation.call(mark, 'friendly', 'noon');
john.presentation.call(mark, 'formal', 'morning');
john.presentation.call(mark, 'friendly', 'night');

// create function preset
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
var johnFormal = john.presentation.bind(john, 'formal');
johnFriendly('afternoon');









  



