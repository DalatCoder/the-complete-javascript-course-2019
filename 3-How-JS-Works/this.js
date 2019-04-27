
// Lecture: this keyword

calculateAge(2000);

/**
 * 
 * In regurlar function call, the this pointer always point the the window object
 * calculateAge function is attached to window object
 * so, calculateAge function is a property of window object 
 */
function calculateAge(year) {
  console.log(2019 - year);
  console.log(this);
}

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function(year) {
    console.log(this);
  }
}

john.calculateAge(john.yearOfBirth);

var mike = {
  name: 'Mike',
  yearOfBirth: 1985
};

// Borrow
mike.calculateAge = john.calculateAge;
mike.calculateAge();