
CalculateAge(1990);

function CalculateAge(year) {
  console.log(2016 - year);
}

var retirement = function(year) {
  console.log(65 - (2016 - year));
}

console.log(age);
var age = 23;

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
