var john = {
  firstName: 'John',
  lastYear: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'] ,
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear) {
    return 2018 - birthYear;
  }
};

console.log(john.calcAge(john.birthYear));


